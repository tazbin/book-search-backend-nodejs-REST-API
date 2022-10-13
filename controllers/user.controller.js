// imports
const express = require('express');
const createErrors = require('http-errors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { User } = require('../models/user.model');
const {
    readUser,
    createUser,
    checkEmailAndPassword
} = require('../services/user.service');
const {
    signAccessToken,
    signRefreshToken,
    verifyRefreshToken
} = require('../helpers/jwt.helper');
const ObjectId = require('mongoose').Types.ObjectId;


/**
 * route: user/registration
 * target: to register a new user
 */
const registerUser = async(req, res, next) => {
    try {

        const userBody = req.body;
        const searchParams = {
            email: userBody.email
        };
        const selectedFields = ['_id', 'name', 'email', 'favouriteBooks'];

        const hasUser = await readUser(searchParams, selectedFields);
        if( hasUser ) {
            throw createErrors.Conflict('This email already exists!');
        }

        const savedUser = await createUser(userBody);
        const accessToken = await signAccessToken(savedUser.id);
        const refreshToken = await signRefreshToken(savedUser.id);

        const user = {
            _id: savedUser._id,
            name: savedUser.name,
            email: savedUser.email,
            favouriteBooks: []
        };

        res.json({
            user, 
            accessToken, 
            refreshToken
        });

    } catch (err) {
        console.log(err);
        next(err);
    }
}


/**
* route: user/login
* target: to login a registered user
*/
const loginUser = async(req, res, next) => {
    try {
          
        let userBody = req.body;

        const authUser = await checkEmailAndPassword(userBody.email, userBody.password);
        const accessToken = await signAccessToken(authUser.id);
        const refreshToken = await signRefreshToken(authUser.id);

        const user = {
            _id: authUser._id,
            name: authUser.name,
            email: authUser.email,
            favouriteBooks: authUser.favouriteBooks
        };

        res.json({
            user, 
            accessToken, 
            refreshToken
        });

    } catch (err) {
        next(err);
    }
}


/**
* route: user/logout
* target: to logout a loggedin user
*/
const logoutUser = async(req, res, next) => {
    try {
          
        const { refreshToken } = req.body;

        if( !refreshToken ) {
            throw createErrors.BadRequest('No refreshToken exists!');
        }

        const userId = await verifyRefreshToken(refreshToken);

        res.sendStatus(204);

    } catch (err) {
        next(err);
    }
}


/**
 * route: user/me/tokenRefresh
 * target: to get new pair of tokens
 */
const tokenRefresh = async(req, res, next) => {
    try {
        
        const { refreshToken } = req.body;

        if( !refreshToken ) { 
            throw createErrors.Forbidden('There is no refreshToken!');
        }

        const userId = await verifyRefreshToken(refreshToken);

        const newAccessToken = await signAccessToken(userId);
        const newRefreshToken = await signRefreshToken(userId);

        res.json({
            userId,
            accessToken: newAccessToken, 
            refreshToken: newRefreshToken
        });

    } catch (err) {
        next(err);
    }
}


/***
 * route: user/me/getLoggedInUserData
 * target: to get the loggedin user's information 
 */
const getLoggedInUserData = async(req, res, next) => {
    try {
        
        const userBody = req.body;
        const searchParams = {
            _id: userBody.userId
        };
        const selectedFields = ['name', 'email', 'favouriteBooks'];

        const myUser = await readUser(searchParams, selectedFields);
        if( !myUser ) {
            throw createErrors.BadRequest('Invalid userId!');
        }
        res.send(myUser);

    } catch (err) {
        next(err);
    }
}

 // exports
 module.exports = {
     registerUser,
     loginUser,
     logoutUser,
     tokenRefresh,
     getLoggedInUserData
 }
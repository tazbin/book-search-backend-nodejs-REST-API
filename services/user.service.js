// imports
const express = require('express');
const createErrors = require('http-errors');
const { User } = require('../models/user.model');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// read user
 const readUser = async(searchParams, selectedFields) => {
    try {

        const existUser = await User.findOne(searchParams)
        .select(selectedFields);
        return Promise.resolve(existUser);
        
    } catch (err) {
        return Promise.reject(err);
    }
}

// create user
 const createUser = async(userBody) => {
    try {

        userBody.password = await bcrypt.hash(userBody.password, saltRounds);
        const newUser =  new User(userBody);
        const savedUser = await newUser.save();
        return Promise.resolve(savedUser);
        
    } catch (err) {
        return Promise.reject(err);
    }
}

// check if email & pass mathces any user
const checkEmailAndPassword = async(email, password) => {
    try {

        const existUser = await User.findOne({email});
        if( !existUser ) {
            throw createErrors.BadRequest(`Invalid username or password!`);
        }
 
        const isValidPassword = await bcrypt.compare(password, existUser.password);
        if( !isValidPassword ) {
            throw createErrors.BadRequest(`Invalid username or password!`);
        }
 
        return Promise.resolve(existUser);
        
    } catch (err) {
        return Promise.reject(err);
    }
}

// exports
module.exports = {
    readUser,
    createUser,
    checkEmailAndPassword
}
// imports
const express = require('express');
const fetch = require('node-fetch');
const createErrors = require('http-errors');
const { User } = require('../models/user.model');
const {
      readUser
} = require('../services/user.service');
const { 
      searchForBooks,
      getBookDetailsById,
      addBookToFavourite,
      removeBookFromFavourite,
      getFavBookDetails
 } = require('../services/book.service');


/**
 * route: book/search
 * target: to search for books by title, author, ISBN or keywords
 */
const searchBooks = async(req, res, next) => {
    try {

        const searchParams = req.params.searchParams;
        const page = req.params.page;

        const searchResult = await searchForBooks(searchParams, page);
        if( searchResult.error != '0' ) {
            throw createErrors.BadRequest('Something went weong, try again!');
        }
        res.send(searchResult);

    } catch (err) {
        next(err);
    }
}

/**
 * route: book/getBookDetails
 * target: to get details of a particular book
 */
 const getBookDetails = async(req, res, next) => {
    try {

        const bookId = req.params.bookId;

        const bookDetails = await getBookDetailsById(bookId);
        if( bookDetails.error != '0' ) {
            throw createErrors.BadRequest('Something went weong, try again!');
        }
        res.send(bookDetails);
        
    } catch (err) {
        if( err.name == 'FetchError' ) {
            err = createErrors.BadRequest('Invalid book id');
        }
        next(err);
    }
}

/**
* route: book/addToFavourite
* target: add a book's id to user's favourite list
*/
const addToFavourite = async(req, res, next) => {
    try {
           
        const { userId, bookId } = req.body;

        // checking user
        const searchParams = {
            _id: userId
        };
        const selectedFields = [];
        const existUser = await readUser(searchParams, selectedFields);
        if( !existUser ) {
            throw createErrors.BadRequest('Invalid userId!');
        }

        // checking bookId
        const bookDetails = await getBookDetailsById(bookId);
        if( bookDetails.error != '0' ) {
            throw createErrors.BadRequest('Something went weong, try again!');
        }

        const updateUser = await addBookToFavourite(existUser, bookId);
        const user = {
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
            favouriteBooks: updateUser.favouriteBooks
        };
        res.send(user);

       } catch (err) {
            if( err.name == 'FetchError' ) {
                err = createErrors.BadRequest('Invalid book id');
            }
           next(err);
    }
}

/***
 * route: book/removeFromFavourite
 * target: to remove a book's id from user's favourite list
 */
const removeFromFavourite = async(req, res, next) => {
    try {
        
        const { userId, bookId } = req.body;

        // checking user
        const searchParams = {
            _id: userId
        };
        const selectedFields = [];
        const existUser = await readUser(searchParams, selectedFields);
        if( !existUser ) {
            throw createErrors.BadRequest('Invalid userId!');
        }

        const updateUser = await removeBookFromFavourite(existUser, bookId);
        
        const user = {
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
            favouriteBooks: updateUser.favouriteBooks
        };
        res.send(user);

    } catch (error) {
        next(error);
    }
}

/**
* route: book/getFavouriteBooks
* target: get detailed favourite book lists
*/
const getFavouriteBooks = async(req, res, next) => {
    try {
           
        const { userId } = req.body;
        
        const searchParams = {
            _id: userId
        };
        const selectedFields = ['favouriteBooks'];
        const userBody = await readUser(searchParams, selectedFields);
        const favBookIdList = userBody.favouriteBooks;

        const FavBooksShortInfo = await getFavBookDetails(favBookIdList);
        
        res.send(FavBooksShortInfo);
        
    } catch (error) {
           next(error);
    }
}

 // exports
 module.exports = {
    searchBooks,
    getBookDetails,
    addToFavourite,
    removeFromFavourite,
    getFavouriteBooks
 }
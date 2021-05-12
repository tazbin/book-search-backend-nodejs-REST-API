// imports
const express = require('express');
const createErrors = require('http-errors');
const { 
      searchBooks,
      getBookDetails,
      addToFavourite,
      removeFromFavourite,
      getFavouriteBooks
 } = require('../controllers/book.controller');
 const {
      verifyAccessToken
 } = require('../helpers/jwt.helper');
 const {
      validateUserId
 } = require('../middlewares/auth.middleware');

// constants
const router = express.Router();

// route: book/
router.get('/search/:searchParams/:page', searchBooks);
router.get('/getBookDetails/:bookId', getBookDetails);
router.post('/addToFavourite', verifyAccessToken, validateUserId, addToFavourite);
router.delete('/removeFromFavourite', verifyAccessToken, validateUserId, removeFromFavourite);
router.get('/getFavouriteBooks', verifyAccessToken, getFavouriteBooks);


// exports
module.exports = router;
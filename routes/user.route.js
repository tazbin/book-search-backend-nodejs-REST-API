// imports
const express = require('express');
const createErrors = require('http-errors');
const { 
    registerUser, 
    loginUser,
    logoutUser,
    tokenRefresh,
    getLoggedInUserData
 } = require('../controllers/user.controller');
 const {
   validateRegisterData,
   validateLoginData
 } = require('../middlewares/auth.middleware');
 const {
    verifyAccessToken
 } = require('../helpers/jwt.helper');

// constants
const router = express.Router();

// route: user/
router.post('/register', validateRegisterData, registerUser);
router.post('/login', validateLoginData, loginUser);
router.delete('/logout', logoutUser);
router.post('/me/tokenRefresh', tokenRefresh);
router.get('/me/getLoggedInUserData', verifyAccessToken, getLoggedInUserData);


// exports
module.exports = router;
// imports
const jwt = require('jsonwebtoken');
const createErrors = require('http-errors');
const client = require('./init_redis.helper');
require('dotenv').config();

/***
 * AccessToken will expire in 1 hour
 * RefreshToken will expire in 1 day
 */

// signing a new accessToken with userId
const signAccessToken = async (userId) => {
    try {

        const payload = {};
        const privateKey = process.env.accessTokenKey;
        const options = {
            expiresIn: "1h",
            issuer: 'tazbinur.info',
            audience: userId
        };

        const token = await jwt.sign(payload, privateKey, options);
        return Promise.resolve(token);

    } catch (err) {
        return Promise.reject(err);
    }
}


// middleware to verifiy an accessToken
const verifyAccessToken = async(req, res, next) => {
    try {

        if (!req.headers['authorization']){
            throw createErrors.BadRequest('No token!');
        }

        const accessToken = req.headers['authorization'].split(' ')[1];
        const decoded = await jwt.verify(accessToken, process.env.accessTokenKey);
        if(decoded) {
            req.body.userId = decoded.aud;
            next();
        }
        
    } catch (err) {
        if( err.name == "TokenExpiredError" || err.name == "JsonWebTokenError" ){
            err.status = 401;
        } else {
            err.status = 400;
        }
        next(err);
    }
}


// signing a new refreshToken with userId
const signRefreshToken = async (userId) => {
    try {
        const payload = {};
        const privateKey = process.env.refreshTokenKey;
        const options = {
            expiresIn: "1d",
            issuer: 'tazbinur.info',
            audience: userId
        };

        const refreshToken = await jwt.sign(payload, privateKey, options);
        client.SET(userId, refreshToken, 'EX', 1*24*60*60, (err, reply) => {
            if(err) {
                console.log(err.message);
                return Promise.reject(createErrors.BadRequest('Try again!'));
            }
        });
        return Promise.resolve(refreshToken);
        
    } catch (err) {
        return Promise.reject(err);
    }
}


// middleware to verifiy a refreshToken
const verifyRefreshToken = (refreshToken) => {
    return new Promise( async(resolve, reject) => {

        try {
            
            const decoded = await jwt.verify(refreshToken, process.env.refreshTokenKey);
            
            const userId = decoded.aud;

            client.GET(userId, (err, token) => {
                if(err) {
                    console.log(err.message);
                    return reject(createErrors.Forbidden());
                } else if( token != refreshToken ) {
                    return reject(createErrors.Forbidden());
                } else {
                    return resolve(userId)
                }
            });

        } catch (err) {
            err.status = 403;
            reject(err);
        }

    });
}

// exports
module.exports = {
    signAccessToken,
    verifyAccessToken,
    signRefreshToken,
    verifyRefreshToken
}
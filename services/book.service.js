const fetch = require('node-fetch');
const createErrors = require('http-errors');
const { User } = require('../models/user.model');


// search for books with title, author, ISBN or keywords
const searchForBooks = async(searchParams, page) => {
    try {
            
        const external_api = `${process.env.ITBOOKSTORE_API_URL}/search/${searchParams}/${page}`;

        const result = await fetch(external_api);
        return Promise.resolve(result.json());

    } catch (err) {
        return Promise.reject(err);
    }
}

// getting details of a particular book
const getBookDetailsById = async(bookId) => {
    try {
            
        const external_api = `${process.env.ITBOOKSTORE_API_URL}/books/${bookId}`;

        const bookDetails = await fetch(external_api);
        return Promise.resolve(bookDetails.json());

    } catch (err) {
        return Promise.reject(err);
    }
}

// add bookId to the favourite list
const addBookToFavourite = async(existUser, bookId) => {
    try {
            
        const hasBook = existUser.favouriteBooks.filter( m => m == bookId );
        if( hasBook.length > 0 ) {
            throw createErrors.BadRequest('This book already added to favourite!');
        }

        existUser.favouriteBooks.push(bookId);
        const updateUser = await existUser.save();

        return Promise.resolve(updateUser);

    } catch (err) {
        return Promise.reject(err);
    }
}

// remove bookId from the favourite list
 const removeBookFromFavourite = async(existUser, bookId) => {
    try {
            
        const hasBook = existUser.favouriteBooks.filter( m => m == bookId );
        if( hasBook.length == 0 ) {
            throw createErrors.BadRequest('This book is not in your favourite list!');
        }

        existUser.favouriteBooks = existUser.favouriteBooks.filter( m => m != bookId );
        const updateUser = await existUser.save();

        return Promise.resolve(updateUser);

    } catch (err) {
        return Promise.reject(err);
    }
}

// getting all books' short details from users favourite list
 const getFavBookDetails = async(favBookIdList) => {
    try {

        const external_api = `${process.env.ITBOOKSTORE_API_URL}/books/`;
        let BookIdPromise = [];
        let allBookShortDetails = [];

        favBookIdList.forEach(id => {
            BookIdPromise.push(
                fetch(`${external_api}${id}`)
                .then(b => b.json())
                .then(b => {
                    return {
                        id: b.isbn13,
                        title: b.title,
                        authors: b.authors,
                        price: b.price,
                        year: b.year,
                        cover: b.image
                    }
                })
                .catch(err => {

                    err.name == 'FetchError' ? err.message = 'error fetching book info' : err.message = err.message;

                    console.log(err);
                    throw err;
                })
            );
        });

        allBookShortDetails = await Promise.all(BookIdPromise);
        return Promise.resolve(allBookShortDetails);

    } catch (err) {
        return Promise.reject(err);
    }
}

// exports
module.exports = {
    searchForBooks,
    getBookDetailsById,
    addBookToFavourite,
    removeBookFromFavourite,
    getFavBookDetails
}
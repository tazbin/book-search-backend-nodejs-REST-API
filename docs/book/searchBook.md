## Search books
To search movies with title, author or keyword

**URL**: `localhost:3000/book/search/:searchParams/:page`

**Method**: `GET`

**Authentication**: Not required

## Request body
**Required fields:** `searchParams`, `page` (query params)

**Optional fields:**

**Data**:
```bash

```

## Success response
**Code**: `200 OK`

**Content**:
```bash
{
    "error": "0",
    "total": "67",
    "page": "1",
    "books": [
        {
            "title": "Practical MongoDB",
            "subtitle": "Architecting, Developing, and Administering MongoDB",
            "isbn13": "9781484206485",
            "price": "$41.65",
            "image": "https://itbook.store/img/books/9781484206485.png",
            "url": "https://itbook.store/books/9781484206485"
        },
        {
            "title": "The Definitive Guide to MongoDB, 3rd Edition",
            "subtitle": "A complete guide to dealing with Big Data using MongoDB",
            "isbn13": "9781484211830",
            "price": "$49.99",
            "image": "https://itbook.store/img/books/9781484211830.png",
            "url": "https://itbook.store/books/9781484211830"
        },
        {
            "title": "MongoDB in Action, 2nd Edition",
            "subtitle": "Covers MongoDB version 3.0",
            "isbn13": "9781617291609",
            "price": "$19.99",
            "image": "https://itbook.store/img/books/9781617291609.png",
            "url": "https://itbook.store/books/9781617291609"
        },
        {
            "title": "Mongoose for Application Development",
            "subtitle": "Learn to speed up your application development by using Mongoose to harness the power of Node.js and MongoDB",
            "isbn13": "9781782168195",
            "price": "$23.99",
            "image": "https://itbook.store/img/books/9781782168195.png",
            "url": "https://itbook.store/books/9781782168195"
        },
        {
            "title": "Pentaho Analytics for MongoDB",
            "subtitle": "Combine Pentaho Analytics and MongoDB to create powerful analysis and reporting solutions",
            "isbn13": "9781782168355",
            "price": "$16.99",
            "image": "https://itbook.store/img/books/9781782168355.png",
            "url": "https://itbook.store/books/9781782168355"
        },
        {
            "title": "Pentaho Analytics for MongoDB Cookbook",
            "subtitle": "Over 50 recipes to learn how to use Pentaho Analytics and MongoDB to create powerful analysis and reporting solutions",
            "isbn13": "9781783553273",
            "price": "$35.99",
            "image": "https://itbook.store/img/books/9781783553273.png",
            "url": "https://itbook.store/books/9781783553273"
        },
        {
            "title": "Web Development with MongoDB and NodeJS, 2nd Edition",
            "subtitle": "Build an interactive and full-featured web application from scratch using Node.js and MongoDB",
            "isbn13": "9781785287527",
            "price": "$38.01",
            "image": "https://itbook.store/img/books/9781785287527.png",
            "url": "https://itbook.store/books/9781785287527"
        },
        {
            "title": "MongoDB Cookbook, 2nd Edition",
            "subtitle": "Harness the latest features of MongoDB 3 with this collection of 80 recipes - from managing cloud platforms to app development, this book is a vital resource",
            "isbn13": "9781785289989",
            "price": "$44.99",
            "image": "https://itbook.store/img/books/9781785289989.png",
            "url": "https://itbook.store/books/9781785289989"
        },
        {
            "title": "The Little MongoDB Book",
            "subtitle": "",
            "isbn13": "1001592208320",
            "price": "$0.00",
            "image": "https://itbook.store/img/books/1001592208320.png",
            "url": "https://itbook.store/books/1001592208320"
        },
        {
            "title": "Node.js, MongoDB and Angular Web Development, 2nd Edition",
            "subtitle": "The definitive guide to using the MEAN stack to build web applications",
            "isbn13": "9780134655536",
            "price": "$33.16",
            "image": "https://itbook.store/img/books/9780134655536.png",
            "url": "https://itbook.store/books/9780134655536"
        }
    ]
}
```

## Error response
**Condition**: 

**Code**: 

**Content**:
```bash

```
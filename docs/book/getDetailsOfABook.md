## Get details of a book
To get details of a particular book with it's isbn10 id

**URL**: `localhost:3000/book/getBookDetails/:bookId`

**Method**: `GET`

**Authentication**: Not required

## Request body
**Required fields:** `bookId` (query params)

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
    "title": "Practical MongoDB",
    "subtitle": "Architecting, Developing, and Administering MongoDB",
    "authors": "Shakuntala Gupta Edward, Navin Sabharwal",
    "publisher": "Apress",
    "language": "English",
    "isbn10": "1484206487",
    "isbn13": "9781484206485",
    "pages": "272",
    "year": "2015",
    "rating": "3",
    "desc": "Practical Guide to MongoDB: Architecting, Developing, and Administering MongoDB begins with a short introduction to the basics of NoSQL databases and then introduces readers to MongoDB - the leading document based NoSQL database, acquainting them step-by-step with all aspects of MongoDB.Practical Gu...",
    "price": "$41.65",
    "image": "https://itbook.store/img/books/9781484206485.png",
    "url": "https://itbook.store/books/9781484206485"
}
```

## Error response
**Condition**: If `bookId` is invalid

**Code**: `400 Bad Request`

**Content**:
```bash
{
    "error": {
        "status": 400,
        "message": "Invalid book id"
    }
}
```
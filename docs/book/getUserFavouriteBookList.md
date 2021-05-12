## Get user's favourite book's list
To get user's favourite book's list with short details

**URL**: `localhost:3000/book/getFavouriteBooks`

**Method**: `GET`

**Authentication**: Required

## Request body
**Required fields:**

**Optional fields:**

**Data**:
```bash

```

## Success response
**Code**: `200 OK`

**Content**:
```bash
[
    {
        "id": "9780596517748",
        "title": "JavaScript: The Good Parts",
        "authors": "Douglas Crockford",
        "price": "$15.99",
        "year": "2008",
        "cover": "https://itbook.store/img/books/9780596517748.png"
    },
    {
        "id": "9781782168195",
        "title": "Mongoose for Application Development",
        "authors": "Simon Holmes",
        "price": "$23.99",
        "year": "2013",
        "cover": "https://itbook.store/img/books/9781782168195.png"
    }
]
```

## Error response
**Condition**: 

**Code**: 

**Content**:
```bash

```
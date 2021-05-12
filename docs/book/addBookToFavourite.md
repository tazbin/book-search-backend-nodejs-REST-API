## Add book to user's favourite list
To add a book to user's favourite list

**URL**: `localhost:3000/book/addToFavourite`

**Method**: `POST`

**Authentication**: Required

## Request body
**Required fields:** `bookId`

**Optional fields:**

**Data**:
```bash
{
    "bookId": "9781782168195"
}
```

## Success response
**Code**: `200 OK`

**Content**:
```bash
{
    "_id": "609a22b763aed431c8ff560e",
    "name": "Tazbinur",
    "email": "t@gmail.com",
    "favouriteBooks": [
        "9780596517748",
        "9781782168195"
    ]
}
```

## Error response
**Condition**: If the requested `bookId` is already been added before, invalid `bookId`

**Code**: `400 Bad Request`

**Content**:
```bash
{
    "error": {
        "status": 400,
        "message": "This book already added to favourite!"
    }
}
```
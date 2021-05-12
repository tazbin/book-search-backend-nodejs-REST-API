## Remove book from user's favourite list
To remove a book from user's favourite list

**URL**: `localhost:3000/book/removeFromFavourite`

**Method**: `DELETE`

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
        "9780596517748"
    ]
}
```

## Error response
**Condition**: If the requested `bookId` is already been removed before or hasn't been added yet

**Code**: `400 Bad Request`

**Content**:
```bash
{
    "error": {
        "status": 400,
        "message": "This book is not in your favourite list!"
    }
}
```
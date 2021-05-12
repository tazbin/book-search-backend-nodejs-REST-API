## Register
To register a new user, collect registered user data & tokens

**URL**: `localhost:3000/user/register`

**Method**: `POST`

**Authentication**: Not required

## Request body
**Required fields:** `email`, `name`, `password`

**Optional fields:**

**Data**:
```bash
{
    "name": "Tazbinur",
    "email": "t@gmail.com",
    "password": "123"
}
```

## Success response
**Code**: `200 OK`

**Content**:
```bash
{
    "user": {
        "_id": "608a3c6266d79145a0d164c8",
        "name": "Tazbinur",
        "email": "tht@gmail.com",
        "favouriteMovies": []
    },
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI...bnPdLfPhreresSx0Ihap3da-288UK8",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6...0kJBWlDVn47m0nDgdf68sp1mCDJjzY"
}
```

## Error response
**Condition**: If any of the required params is absent or the `email` is already registered.

**Code**: `409 Conflict`

**Content**:
```bash
{
    "error": {
        "status": 409,
        "message": "t@gmail.com already exists"
    }
}
```
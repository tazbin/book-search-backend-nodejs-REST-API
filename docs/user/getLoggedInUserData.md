## Get loggedin user's data
To get user information of a loggedin user

**URL**: `localhost:3000/user/me/getLoggedInUserData`

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
{
    "favouriteMovies": [
        "tt9208876",
        "tt0458339"
    ],
    "_id": "604ddda51bd9de45d0c63c88",
    "name": "Tazbinur",
    "email": "t@gmail.com"
}
```

## Error response
**Condition**: If user is not loggedin, authorization header is absent

**Code**: `400 Bad Request` for no token, `401 Unauthorize` for invalid token,

**Content**:
```bash
{
    "error": {
        "status": 400,
        "message": "No token!"
    }
}
```
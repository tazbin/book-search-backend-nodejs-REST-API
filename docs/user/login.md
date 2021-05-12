## Login
To login a registered user, collect registered user data & tokens

**URL**: `localhost:3000/user/login`

**Method**: `POST`

**Authentication**: Not required

## Request body
**Required fields:** `email`, `password`

**Optional fields:**

**Data**:
```bash
{
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
        "_id": "604ddda51bd9de45d0c63c88",
        "name": "Tazbinur",
        "email": "t@gmail.com",
        "favouriteMovies": [
            "tt9208876",
            "tt0458339"
        ]
    },
    "accessToken": "eyJhbGciOiJIUzI1NiI...dHhyAPTnWeQxzUo3VYXOZbUA9wJpiKlu2OEMo",
    "refreshToken": "eyJhbGciOiJIUzI1NiIs...uATzJ7xstRY5B51UpPDdL6IFyCZl-AOb8yn8Y"
}
```

## Error response
**Condition**: If any of the required params is absent, the `email` is invalid, wrong `email` and `password` combination.

**Code**: `400 Bad Request`

**Content**:
```bash
{
    "error": {
        "status": 400,
        "message": "Invalid username or password!"
    }
}
```
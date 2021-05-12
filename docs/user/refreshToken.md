## RefreshToken
To refresh token when loggedin user's `accessToken` get expired, collect new pair of `accessToken` & `refreshToken`

**URL**: `localhost:3000/user/me/tokenRefresh`

**Method**: `POST`

**Authentication**: Required

## Request body
**Required fields:** `refreshToken`

**Optional fields:**

**Data**:
```bash
{
    "refreshToken": "eyJhbGciOiJIUzI1NiI...9nR4z2ua2CAiSLc0UiZ582mh2E9EFI"
}
```

## Success response
**Code**: `200 OK`

**Content**:
```bash
{
    "userId": "604ddda51bd9de45d0c63c88",
    "accessToken": "eyJhbGciOiJIUzI1NiI...w7Q5XmEop2LG9TRfeQpVIebeCc52JMSGA",
    "refreshToken": "eyJhbGciOiJIUzI1NiIs...71NNrUMA12ETahd7sUbb-MO1Hcx3vQqol8"
}
```

## Error response
**Condition**: If `refreshToken` is absent, invalid, expired or already deleted from redis cache

**Code**: `403 Forbidden`

**Content**:
```bash
{
    "error": {
        "status": 403,
        "message": "Forbidden"
    }
}
```
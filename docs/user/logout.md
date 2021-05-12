## Logout
To logout a loggedin user, remove his refreshToken

**URL**: `localhost:3000/user/logout`

**Method**: `POST`

**Authentication**: Required

## Request body
**Required fields:** `refreshToken`

**Optional fields:**

**Data**:
```bash
{
    "refreshToken": "eyJhbGciOiJIUzI1NiIsIn...ua2CAiSLc0UiZ582mh2E9EFI"
}
```

## Success response
**Code**: `204 No Content`

**Content**:
```bash
1
```

## Error response
**Condition**: If `refershToken` is absent, invaid or expired

**Code**: `400 Bad Request`

**Content**:
```bash
{
    "error": {
        "status": 400,
        "message": "No refreshToken exists!"
    }
}
```
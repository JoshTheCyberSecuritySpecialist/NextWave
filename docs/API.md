# API Documentation

## Authentication

All API endpoints require authentication unless specified otherwise.

### Authentication Header

```http
Authorization: Bearer <token>
```

## Endpoints

### User Management

#### Create User

```http
POST /api/users
```

Request body:
```json
{
  "email": "string",
  "password": "string",
  "name": "string"
}
```

Response:
```json
{
  "id": "string",
  "email": "string",
  "name": "string",
  "createdAt": "string"
}
```

#### Get User Profile

```http
GET /api/users/me
```

Response:
```json
{
  "id": "string",
  "email": "string",
  "name": "string",
  "profile": {
    "avatar": "string",
    "bio": "string"
  }
}
```

### Content Management

#### Create Post

```http
POST /api/posts
```

Request body:
```json
{
  "title": "string",
  "content": "string",
  "tags": "string[]"
}
```

Response:
```json
{
  "id": "string",
  "title": "string",
  "content": "string",
  "tags": "string[]",
  "createdAt": "string",
  "author": {
    "id": "string",
    "name": "string"
  }
}
```

## Error Handling

All endpoints return standard HTTP status codes:

- 200: Success
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

Error response format:
```json
{
  "error": {
    "code": "string",
    "message": "string",
    "details": {}
  }
}
```
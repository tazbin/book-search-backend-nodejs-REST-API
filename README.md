# book-search-backend-nodejs-REST-API

**book-search** is one of my personal projects where anyone can search for books related to programming, IT or technology. Registered user can also add books to their favourite list. This repository holds the code of it's backend which is a **RESTful API**.

<em> The frontend of this project can be found [here (Angular)](https://github.com/tazbin/book-search-frontend-Angular). </em>

<em> Visit complete live project [book-search241.netlify.app](https://book-search241.netlify.app/) </em>

### Contents

- [book-search-backend-nodejs-REST-API](#book-search-backend-nodejs-rest-api)
    - [Contents](#contents)
  - [Features:](#features)
  - [Tech used:](#tech-used)
  - [How to get the project:](#how-to-get-the-project)
    - [Using Git (recommended)](#using-git-recommended)
    - [Using manual download ZIP](#using-manual-download-zip)
    - [Setting up environments](#setting-up-environments)
  - [Run the project using docker](#run-the-project-using-docker)
  - [API endpoints:](#api-endpoints)
      - [*Indication*](#indication)
    - [User related](#user-related)
    - [Book related](#book-related)

## Features:
- Users can create their profiles (token-based authentication)
- Users can search for books by title, author or keywords
- Users can view details of a particular book
- Users can add books to their favorite list
- Users can remove books from their favorite list
- Users can view their list of favorite books

## Tech used:

**Runtime environment**
- [x] Node.js

**API for books**
- [x] [IT Book Store API](https://api.itbook.store/)

**Database**
- [x] MongoDB

**Containerized tool**
- [x] Docker

## How to get the project:
### Using Git (recommended)
1. Navigate & open CLI into the directory where you want to put this project & Clone this project using this command.
   
```bash
git clone https://github.com/tazbin/book-search-backend-nodejs-REST-API.git
```
### Using manual download ZIP
1. Download repository
2. Extract the zip file, navigate into it & copy the folder to your desired directory

### Setting up environments
1. There is a file named `.env.example` on the root directory of the project
2. Create a new file by copying & pasting the file on the root directory & rename it to just `.env`
3. The `.env` file is already ignored, so your credentials inside it won't be committed
4. Change the values of the file. Make changes of comment to the `.env.example` file while adding new constants to the `.env` file.

## Run the project using docker
1. To build **docker image**
    ```bash
    docker compose build --no-cache
    ```

2. To run the **containers** in detached mode (wait for a while for database connection)
    ```bash
    docker compose up -d
    ```

3. To view running **containers**
    ```bash
    docker container ps
    ```

4. To view **API logs**
    ```bash
    docker logs booksearch-api-c
    ```

5. To **run tests**, first enter within the API container
   - on windows CMD (not switching to bash)
        ```bash
        docker exec -it booksearch-api-c /bin/sh
        ```
   - on windows CMD (after switching to bash)
        ```bash
        docker exec -it booksearch-api-c //bin//sh
        ```
        or
        ```bash
        winpty docker exec -it booksearch-api-c //bin//sh
        ```
    now run **test command**
    ```bash
    npm test
    ```
6. To exit from **API container**, press <kbd>Ctrl</kbd>+<kbd>D</kbd> on terminal

7. To **stop** the containers
    ```bash
    docker compose down
    ```

## API endpoints:

#### *Indication*
- [x] **Authentication required**
- [ ] **Authentication not required**

### User related
- [ ] [Resgister](docs/user/register.md): `POST localhost:3000/user/register`
- [ ] [Login](docs/user/login.md): `POST localhost:3000/user/login`
- [x] [Logout](docs/user/logout.md): `DELETE localhost:3000/user/logout`
- [x] [Refresh token](docs/user/refreshToken.md): `POST localhost:3000/user/me/tokenRefresh`
- [x] [Get loggedin user's info](docs/user/getLoggedInUserData.md): `GET localhost:3000/user/me/getLoggedInUserData`

### Book related
- [ ] [Search for books](docs/book/searchBook.md): `GET localhost:3000/book/search/:searchParams/:page`
- [ ] [Get details of a particular book](docs/book/getDetailsOfABook.md): `GET localhost:3000/book/getBookDetails/:bookId`
- [x] [Add a book to user's favourite list](docs/book/addBookToFavourite.md): `POST localhost:3000/book/addToFavourite`
- [x] [Remove a book from user's favourite list](docs/book/removeBookFromFavourite.md): `DELETE localhost:3000/book/removeFromFavourite`
- [x] [Get user's favourite book list](docs/book/getUserFavouriteBookList.md): `GET localhost:3000/book/getFavouriteBooks`



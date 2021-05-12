# book-search-backend-nodejs-REST-API

**book-search** is one of my personal projects where anyone can search for books related to programming, IT or technology. Registered user can also add books to their favourite list. This repository holds the code of it's backend which is a **RESTful API**.

<em> The frontend of this project can be found [here (Angular)](https://github.com/tazbin/book-search-frontend-Angular). </em>

<em> Visit complete live project [book-search241.netlify.app](https://book-search241.netlify.app/) </em>

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
- [x] IT Book Store API

**Database**
- [x] MongoDB

**Dependencies**
- [x] bcrypt: ^5.0.0,
- [x] cors: ^2.8.5,
- [x] dotenv: ^8.2.0,
- [x] express: ^4.17.1,
- [x] http-errors: ^1.8.0,
- [x] joi: ^17.4.0,
- [x] jsonwebtoken: ^8.5.1,
- [x] mongoose: ^5.11.18,
- [x] node-fetch: ^2.6.1
- [x] redis: ^3.0.2

## How to install & run:
### Using Git (recommended)
1. Navigate & open CLI into the directory where you want to put this project & Clone this project (will be cloned inside myProject folder) using this command.
   
```bash
git clone https://github.com/tazbin/book-search-backend-nodejs-REST-API.git ./myProject
```
### Using manual download ZIP
1. Download repository
2. Extract the zip file, navigate into it & copy the folder to your desired directory

### Install npm dependencies after cloning or downloading
```bash
npm install
```

### Setting up environments
1. There is a file named `.env.example` on the root directory of the project
2. Create a new file by copying & pasting the file on the root directory & rename it to just `.env`
3. The `.env` file is already ignored, so your credentials inside it won't be committed
4. Change the values of the file. Make changes of comment to the `.env.example` file while adding new constants to the `.env` file.

### Run the project
```bash
npm start
```

You can be sure that the server is running by checking this output in the command window
```bash
server running at port 3000...
Client connected to redis
Client connected to redis & ready to use...
mongodb successfully connected...
mongodb connected...
```

Press `CTRL + C` to stop the server.

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



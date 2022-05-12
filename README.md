## FAVS API

Favs is a new company that aims to provide a better way to organize your favorite things: music, clothes, courses, etc., all in one place.

## Deploy

https://favapi.herokuapp.com

## Installation

Requires [Node.js](https://nodejs.org/) v14+ to run.

Install the dependencies and devDependencies and start the server.

```sh
npm install
```

For production environments...

```sh
PORT=
DB_URI=
JWT_KEY_SECRET=
JWT_TIME_EXPIRED=
```

## Plugins

- Jest
- Nodemon
- Supertest
- Bcrypt
- Dotenv
- Express
- Jsonwebtoken
- Mongoose

## Run

Development:

```sh
npm run dev
```

Production:

```sh
npm start
```

Test:

```sh
npm test
```

## Features

- Create users
- List all users;
- Authentication using JWT
- Create List of favorites;
- Add favorite on the list;
- Delete list of favorites;
- List all list for user;

### [API Documentation](https://documenter.getpostman.com/view/1888478/UyrAFHTq "API Documentation")

## License

MIT

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const usersRouter = require('../users/usersRouter.js');
const authRouter = require('../auth/authRouter.js');
const errorHandler = require('./errorHandler.js');
const session = require('express-session');
const knexSessionStore = require('connect-session-knex')(session);

const server = express();

const sessionConfig = {
    name: 'jvcookie',
    secret: 'its a secret',
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: false,


    store: new knexSessionStore({
        knex: require('../database/db-config'),
        tablename: 'sessions',
        sidfieldname: 'sid',
        createtable: true,
        clearInterval: 1000 * 60 * 60
    })
}

server.use(session(sessionConfig));
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);

server.use(errorHandler);

module.exports = server;
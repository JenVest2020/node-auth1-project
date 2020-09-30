const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const usersRouter = require('../users/usersRouter.js');
const authRouter = require('../auth/authRouter.js');
const errorHandler = require('./errorHandler.js');

const server = express();


server.use(express.json());
server.use(helmet());
server.use(cors());
server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);

server.use(errorHandler);

module.exports = server;
'use strict';

require('dotenv').config();

const express = require('express');
const socket = require('socket.io');
const app = express();

const PORT = process.env.PORT;

/**
 * Client will send a request to http://example.com/socket-endpoint/?EIO=3&transport=websocket
 */
const io = socket(app.listen(PORT), { path: '/socket-endpoint' });

io.set('transports', ['websocket']);

require('./backend/sockets/room')(io);

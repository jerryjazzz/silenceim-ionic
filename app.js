/* global process */

require('dotenv').config();

const express = require('express');
const socket = require('socket.io');
const app = express();

app.set('port', process.env.PORT);
app.set('environment', process.env.NODE_ENV || 'development');

/**
 * Initializers
 */
require('./backend/initializers/winston')(app);

/**
 * Client will send a request to
 * http://example.com/socket-endpoint/?EIO=3&transport=websocket
 * DO NOT FORGET TO PROXY THIS PATH VIA NGINX IN PRODUCTION
 */
const io = socket(app.listen(app.get('port'), function() {
  app.get('logger').info(`Listening ${JSON.stringify(this.address())}`)
}), { path: '/socket-endpoint' });

io.set('transports', ['websocket']);

require('./backend/sockets/room')(io);

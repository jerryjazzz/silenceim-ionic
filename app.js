/* global process */

require('dotenv').config();

const express = require('express');
const socket = require('socket.io');
const app = express();

app.set('port', process.env.PORT);
app.set('environment', process.env.NODE_ENV || 'development');
app.set('apiVersion', 1.0);

/**
 * Initializers
 */
require('./backend/initializers/winston')(app);
require('./backend/initializers/slack')(app);

/**
 * Client will send a request to
 * http://example.com/socket-endpoint/?EIO=3&transport=websocket
 * DO NOT FORGET TO PROXY THIS PATH VIA NGINX IN PRODUCTION
 */
const io = socket(app.listen(app.get('port'), function() {
  app.get('logger').info(`Listening ${JSON.stringify(this.address())}`)
}), { path: '/socket-endpoint' });

io.set('transports', ['websocket']);

// Set app
app.set('io', io);

// Middleware
require('./backend/sockets/middleware/meta')(app);

// Observers
require('./backend/sockets/observers/socket_room')(app);

// Sockets
require('./backend/sockets/feedback')(app);
require('./backend/sockets/room')(app);

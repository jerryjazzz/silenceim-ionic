module.exports = function(app) {

  'use strict';

  const io = app.get('io');

  io.on('connection', function (socket) {
    socket.on('chat:message:post', function(payload, fn) {
      const cb = fn || function() {};

      // broadcast message to a room (excluding the client):
      socket.broadcast.to(socket.roomName).emit('chat:message:add', {message: payload, user: socket.user});

      cb();
    });
  });
};

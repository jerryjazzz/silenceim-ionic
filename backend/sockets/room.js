const uuid = require('node-uuid');

module.exports = function(app) {

  'use strict';

  const io = app.get('io');

  io.on('connection', function (socket) {
    socket.on('room:join', function({roomName, userName}, fn) {
      const cb = fn || function() {};

      if (!roomName) {
        cb(null, 'Room name is required');
      } else if (!userName) {
        cb(null, 'User name is required');
      } else {

        socket.user = {
          cid: uuid.v4(),
          userName: userName,
        };

        socket.roomName = roomName;

        // TODO check if it is not in the room currently
        socket.join(socket.roomName);
        app.emit('socket:room:join', socket);

        cb();
      }
    });

    socket.on('room:leave', function(fn) {
      const cb = fn || function() {};
      socket.leave(socket.roomName);
      app.emit('socket:room:leave', socket);
      cb();
    });
  });
};

module.exports = function(app) {

  'use strict';

  const io = app.get('io');

  function notifyUserRoster(socket) {
    io.sockets.in(socket.roomName).emit('room:roster', []);
  }

  app.on('socket:room:join', notifyUserRoster);
  app.on('socket:room:leave', notifyUserRoster);
};

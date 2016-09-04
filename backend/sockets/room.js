module.exports = function(io) {

  'use strict';

  io.on('connection', function (socket) {
    socket.on('room:join', function({roomName, userName}, fn) {

      const cb = fn || function() {};

      if (!roomName) {
        cb(null, 'Room name is required');
      }

      if (!userName) {
        cb(null, 'User name is required');
      }
    });
  });
};

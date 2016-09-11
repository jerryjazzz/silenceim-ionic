module.exports = function(app) {

  'use strict';

  const io = app.get('io');

  /**
   * @returns {array}
   */
  function roomSockets(socket) {
    const room = io.sockets.adapter.rooms[socket.roomName];
    const sockets = [];

    if (room) {
      for (let id in room.sockets) {
        let socket = io.sockets.connected[id];
        if (socket) sockets.push(socket);
      }
    }

    return sockets;
  }

  function notifyJoin(socket) {
    // broadcast to a room (excluding the client):
    socket.broadcast.to(socket.roomName).emit('roster:add', socket.user);

    // emit to user
    const users = roomSockets(socket).map(function(socket) {
      return socket.user;
    });

    socket.emit('roster:list', users);
  }

  function notifyLeave(socket) {
    // broadcast to a room (excluding the client):
    socket.broadcast.to(socket.roomName).emit('roster:remove', socket.user);
  }

  app.on('socket:room:join', notifyJoin);
  app.on('socket:room:leave', notifyLeave);
};

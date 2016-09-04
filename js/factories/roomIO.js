function factory(socket) {
  function join({roomName, userName}, cb) {
    socket.emit('room:join', {roomName: roomName, userName: userName}, cb);
  }

  function leave(cb) {
    socket.emit('room:leave', cb);
  }

  return {
    join,
    leave
  }
}

angular.module('starter').factory('roomIO', ['socket', factory]);

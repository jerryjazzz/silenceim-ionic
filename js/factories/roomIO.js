function factory(settings, socket) {

  function setCredentials({roomName, userName}) {
    settings.set('roomName', roomName);
    settings.set('userName', userName);
  }

  function getCredentials() {
    return {roomName: settings.get('roomName'), userName: settings.get('userName')}
  }

  /***
   * @returns {boolean}
   */
  function isJoined() {
    const {roomName, userName} = getCredentials();
    return roomName && userName;
  }

  /***
   * @returns {Promise}
   */
  function join({roomName, userName}) {
    return new Promise(function (resolve, reject) {
      socket.emit('room:join', {roomName: roomName, userName: userName}, function(_, e) {
        if (e) {
          reject(e);
        } else {
          setCredentials({roomName, userName});
          resolve();
        }
      });
    });
  }

  /***
   * @returns {Promise}
   */
  function leave() {
    return new Promise(function (resolve) {
      socket.emit('room:leave', function() {
        setCredentials({});
        resolve();
      });
    });
  }

  return {
    join,
    leave,
    isJoined
  }
}

angular.module('starter').factory('roomIO', ['settings', 'socket', factory]);

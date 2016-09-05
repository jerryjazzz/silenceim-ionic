
function factory(host) {

  const endpont = host.isLocalhost() ? 'http://localhost:5000' : 'https://silenceim.com';
  const socket = io.connect(endpont, { transports: ['websocket'], path: '/socket-endpoint' });

  const connPub = new Rx.BehaviorSubject(false);

  socket.on('connect', function() {
    connPub.onNext(true);
  });

  socket.on('disconnect', function() {
    connPub.onNext(false);
  });

  return {
    connPub,

    on: function() {
      socket.on(...arguments);
    },

    emit: function() {
      socket.emit(...arguments);
    },
  }
}

angular.module('starter').factory('socket', ['host', factory]);

function factory(host, apiBackendVersion) {

  const endpont = host.isLocalhost() ? 'http://localhost:5000' : 'https://silenceim.com';
  const socket = io.connect(endpont, { query: `apiVersion=${apiBackendVersion}&platform=${ionic.Platform.platform()}`, transports: ['websocket'], path: '/socket-endpoint' });

  const connPub = new Rx.BehaviorSubject(false);

  var emitPub = Rx.Observable.create(function(observer) {
    /**
     * Redefine original socket method
     * it is called on system events like connect/disconnect
     */
    const emit = socket.emit;

    socket.emit = function() {
      observer.onNext(arguments);
      emit.apply(this, arguments);
    };
  });

  var oneventPub = Rx.Observable.create(function(observer) {
    /**
     * Redefine original socket method
     * it is called on cli custom events
     */
    const onevent = socket.onevent;

    socket.onevent = function() {
      observer.onNext(arguments);
      onevent.apply(this, arguments);
    };
  });

  socket.on('connect', function() {
    connPub.onNext(true);
  });

  socket.on('disconnect', function() {
    connPub.onNext(false);
  });

  return {
    connPub,
    emitPub,
    oneventPub,

    on: function() {
      socket.on(...arguments);
    },

    emit: function() {
      socket.emit(...arguments);
    },
  }
}

angular.module('starter').factory('socket', ['host', 'apiBackendVersion', factory]);

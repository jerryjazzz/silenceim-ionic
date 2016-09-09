function run(logr, socket) {

  const silenceEvents = ['ping', 'pong'];

  socket.emitPub.subscribe(function(data) {
    const [event, message] = data;

    if (!silenceEvents.includes(event)) {
      logr.info(`socket:${event}`, message);
    }
  });

  socket.oneventPub.subscribe(function(packet) {
    const [event, message] = packet[0].data;

    if (!silenceEvents.includes(event)) {
      logr.info(`socket:${event}`, message);
    }
  });
}

angular.module('starter').run(['logr', 'socket', run]);

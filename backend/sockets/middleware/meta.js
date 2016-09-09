module.exports = function(app) {

  'use strict';

  const io = app.get('io');

  // extends socket on handshake with meta info
  io.use(function(socket, next){
    const handshake = socket.handshake;
    const request = socket.request;
    const query = request._query;

    socket.meta = {
      apiVersion: parseFloat(query.apiVersion),
      platform: query.platform,
      userAgent: request.headers['user-agent'],
      ip: handshake.headers['x-forwarded-for'] || handshake.address
    };

    next();
  });
};

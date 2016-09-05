module.exports = function(io, app) {

  'use strict';

  io.on('connection', function (socket) {
    socket.on('feedback:send', function({body, platform, version, email='anonymous', device='browser?'}, fn) {
      const cb = fn || function() {};

      if (!body) {
        cb(null, 'Your Feedback is empty');
      } else {

        app.get('slack').send({
          channel: '#feedbacks',
          icon_emoji: ':left_speech_bubble:',
          username: 'Feedback',
          text: body,
          fields: {
            email,
            device,
            platform,
            version,
            ip: socket.handshake.headers['x-forwarded-for'] || socket.handshake.address,
            userAgent: socket.request.headers['user-agent']
          }
        });

        cb();
      }
    });
  });
};

module.exports = function(app) {

  'use strict';

  const io = app.get('io');
  const slack = app.get('slack');

  io.on('connection', function (socket) {
    socket.on('feedback:send', function({body, email='anonymous'}, fn) {
      const cb = fn || function() {};

      if (!body) {
        cb(null, 'Your Feedback is empty');
      } else {
        slack.send({
          channel: '#feedbacks',
          icon_emoji: ':left_speech_bubble:',
          username: 'Feedback',
          text: body,
          fields: {
            email,
            platform: socket.meta.platform,
            apiVersion: socket.meta.apiVersion,
            ip: socket.meta.ip,
            userAgent: socket.meta.userAgent
          }
        });

        cb();
      }
    });
  });
};

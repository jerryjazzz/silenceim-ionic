/**
 * Eager load modules to initialize them & start listen events
 */
function run(Message, socket, rosterIO, chatIO) {
  rosterIO.pushPub.subscribe(function(user) {
    chatIO.push(new Message({kind: 'system', body: `User ${user.userName} has join the channel`}));
  });

  rosterIO.removePub.subscribe(function(user) {
    chatIO.push(new Message({kind: 'system', body: `User ${user.userName} left the channel`}));
  });

  // this listener should be here as factory should save messages
  // even the user is not in ChatCtrl
  socket.on('chat:message:add', function(payload) {
    chatIO.push(new Message($.extend(payload.message, {user: payload.user, kind: 'in'})))
  });
}

angular.module('starter').run(['Message', 'socket', 'rosterIO', 'chatIO', run]);

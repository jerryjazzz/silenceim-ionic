/**
 * Eager load modules to initialize them & start listen events
 */
function run(Message, rosterIO, chatIO) {
  rosterIO.pushPub.subscribe(function(user) {
    chatIO.push(new Message({kind: 'system', body: `User ${user.userName} has join the channel`}));
  });

  rosterIO.removePub.subscribe(function(user) {
    chatIO.push(new Message({kind: 'system', body: `User ${user.userName} left the channel`}));
  });
}

angular.module('starter').run(['Message', 'rosterIO', 'chatIO', run]);

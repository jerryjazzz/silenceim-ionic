function factory(User, socket) {

  const roster = [];

  const pushPub = new Rx.Subject();
  const listPub = new Rx.BehaviorSubject(roster);

  function prune(newArray) {
    roster.length = 0;

    if (newArray) {
      roster.push.apply(roster, newArray);
    }
  }

  socket.on('roster:list', function(users) {
    prune(users.map((params)=> new User(params)));
    listPub.onNext(roster);
  });

  socket.on('roster:add', function(userParams) {
    const user = new User(userParams);
    roster.push(user)
    pushPub.onNext(user);
  });

  return {
    listPub,
    pushPub
  }
}

angular.module('starter').factory('rosterIO', ['User', 'socket', factory]);

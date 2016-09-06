function run($rootScope, $state, roomIO) {
  $rootScope.$on('$stateChangeStart', function(event, toState) {
    if (toState.name === 'app.landing' && roomIO.isJoined()) {
      event.preventDefault();
      $state.go('app.im');
    }

    if (toState.name === 'app.im' && !roomIO.isJoined()) {
      event.preventDefault();
      $state.go('app.landing');
    }
  });
}

angular.module('starter').run(['$rootScope', '$state', 'roomIO', run]);

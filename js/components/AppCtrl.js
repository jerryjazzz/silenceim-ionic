function ctrl($state, storage) {

  if (!storage.get('tutorialDone')) {
    storage.set('tutorialDone', true);
    $state.go('app.about_tutorial');
  }
}

angular.module('starter.controllers').controller('AppCtrl', ['$state', 'storage', ctrl]);

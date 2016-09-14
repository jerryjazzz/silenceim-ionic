function ctrl($scope, chatIO) {

  const message = chatIO.find($scope.$messageCID);
  const promise = message.get('kind') == 'in' ? message.dec() : message.enc();

  promise.then(function(crc) {
    $scope.$evalAsync(function() {
      $scope.crc = crc;
    });
  }).catch(function(e) {
    $scope.$evalAsync(function() {
      $scope.error = e;
    });
  });
}

angular.module('starter.controllers').controller('ImChatOriginalCtrl', ['$scope', 'chatIO', ctrl]);

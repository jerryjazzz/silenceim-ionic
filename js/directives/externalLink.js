function directive() {
  return {
    restrict: 'A',
    link: function($scope, element, attributes) {
      const $el = $(element);

      $el.on('click', function() {
        // Cordova (works in the browser the same)
        window.open(attributes.externalLink, '_system');
      });

      $scope.$on('$destroy', function() {
        $el.off();
      });
    }
  };
}

angular.module('starter').directive('externalLink', [directive]);

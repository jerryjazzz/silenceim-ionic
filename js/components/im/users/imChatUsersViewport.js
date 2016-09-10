function directive(rosterIO) {
  return {
    restrict: 'C',

    link: function($scope, element) {
      const $el = $(element);

      function render(user) {
        const html = `
<div class="user">
  <div class="avatar">
    ${user.abbrev()}
  </div>  
</div>
`;
        $el.prepend(html);
      }

      const listSub = rosterIO.listPub.subscribe(function(users) {
        $el.html('');
        users.forEach((user) => render(user));
      });

      const pushSub = rosterIO.pushPub.subscribe(function(user) {
        render(user);
      });

      $scope.$on('$destroy', function() {
        listSub.dispose();
        pushSub.dispose();
      });
    }
  };
}

angular.module('starter.controllers').directive('imChatUsersViewport', ['rosterIO', directive]);

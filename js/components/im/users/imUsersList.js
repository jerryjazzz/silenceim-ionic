function directive(rosterIO) {
  return {
    restrict: 'C',

    link: function($scope, element) {
      const $el = $(element);

      function render(user) {
        const html = `
<div class="item item-avatar" data-id="${user.cid}">
  <div class="avatar"><div>${user.abbrev()}</div></div>
  <h2>${user.userName}</h2>
  <p>${user.cid}</p>
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

      const removeSub = rosterIO.removePub.subscribe(function(user) {
        $el.find(`.item[data-id=${user.cid}]`).remove();
      });

      $scope.$on('$destroy', function() {
        listSub.dispose();
        pushSub.dispose();
        removeSub.dispose();
      });
    }
  };
}

angular.module('starter.controllers').directive('imUsersList', ['rosterIO', directive]);

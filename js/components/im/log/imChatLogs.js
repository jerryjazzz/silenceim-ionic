function directive(utils, logr) {
  return {
    restrict: 'C',

    link: function($scope, element) {
      const $el = $(element);

      function render(msg, animate) {
        const html = `
<div class="card  im-chat-log">
 <div class="item item-divider">
    ${msg.kind} ${msg.prefix}
  </div>
  <div class="item ${utils.isPresent(msg.message) ? '' : 'empty'}">
    ${msg.message}
  </div>
   <div class="item item-divider">
    ${msg.date}
  </div>
</div>
`;
        const $html = $(html);

        if (animate) $html.css({display: 'none', opacity: 0});;
        $el.prepend($html);

        if (animate) {
          $html.slideDown(200, function() {
            $(this).fadeTo(100, 1);
          });
        }
      }

      logr.messages.forEach(function(msg) {
        render(msg, false);
      });

      const deleteSub = logr.deletePub.subscribe(function(msg) {
        $el.find(`.im-chat-log[data-id=${msg.cid}]`).slideUp(function() {
          $(this).remove();
        })
      });

      const pushSub = logr.pushPub.subscribe(function(msg) {
        render(msg, true);
      });

      $scope.$on('$destroy', function() {
        pushSub.dispose();
        deleteSub.dispose();
      });
    }
  };
}

angular.module('starter.controllers').directive('imChatLogs', ['utils', 'logr', directive]);

function directive(logr) {
  return {
    restrict: 'C',

    link: function($scope, element) {
      const $el = $(element);

      function render(msg, animate) {
        const html = `
<div class="im-chat-log" data-id="${msg.cid}">
  <span class="kind">[${msg.kind}]</span> <span class="prefix">${msg.prefix}</span> <span class="message">${msg.message}</span>
  <div class="date"><i class="icon ion-android-time"></i> ${msg.date}</div>
</div>
`;
        const $html = $(html);
        if (animate) $html.hide();
        $el.prepend($html);
        if (animate) $html.slideDown(200);
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

angular.module('starter.controllers').directive('imChatLogs', ['logr', directive]);

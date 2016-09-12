function directive(chatIO) {

  const TEMPLATE = `
<div class="primary">Your wrote, <a href="javascript:;" role="show-original">show original</a></div>

<div class="message">
  <div class="balloon">
    <div class="body"></div>    
  </div>
</div>
<div class="clearfix"></div>
<div class="secondary"><span class="status">Sending..</span></div>
`;


  return {
    restrict: 'C',

    link: function($scope, element) {
      const $el = $(element);
      const $template = $(TEMPLATE);
      const $body = $template.find('.body');
      const $status = $template.find('.status');
      const message = chatIO.find($el.data('id'));

      $body.text(message.body);
      $el.html($template);

      function update() {
        if (message.sent) {
          $status.text('Sent');
        }
      }

      update();

      const updateSub = chatIO.updatePub.subscribe(function(msg) {
        if (msg.cid === message.cid) {
          update();
        }
      });

      $scope.$on('$destroy', function() {
        $el.off();
        updateSub.dispose();
      });
    }
  };
}

angular.module('starter.controllers').directive('imChatMessageOut', ['chatIO', directive]);

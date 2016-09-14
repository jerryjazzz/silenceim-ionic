function ctrl($scope, $compile, Message, chatIO) {

  function render(message, animate) {
    const html = `
<div data-id="${message.get('cid')}" class="im-chat-message im-chat-message-${message.get('kind')}" />
`;
    const $html = $($compile(html)($scope.$new()));

    if (animate) {
      $html.addClass('animate');
      $html.css({display: 'none', opacity: 0});
    }

    $('#messages').prepend($html);

    if (animate) {
      $html.slideDown(200, function() {
        $(this).fadeTo(100, 1);
      });
    }
  }

  // Render history
  chatIO.messages.forEach((message) => render(message, false));

  const pushSub = chatIO.pushPub.subscribe(function(message) {
    render(message, true);

    if (message.get('kind') === 'out') {
      chatIO.emit(message);
    }
  });

  if (!chatIO.messages.length) {
    chatIO.push(new Message({body: 'You may change settings on the fly. Tap on message to see the original', kind: 'system'}));
  }

  $scope.$on('$destroy', function(){
    pushSub.dispose();
  });
}

angular.module('starter.controllers').controller('ImChatCtrl', ['$scope', '$compile', 'Message', 'chatIO', ctrl]);

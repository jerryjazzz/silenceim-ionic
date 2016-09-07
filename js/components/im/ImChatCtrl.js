function ctrl($scope, $compile, Message, chatIO) {

  function render(message, animate) {
    const html = `
<div data-id="${message.get('cid')}" class="im-chat-message im-chat-message-${message.get('kind')}" />
`;
    const $html = $($compile(html)($scope.$new()));

    console.log($html);

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
  chatIO.historyPub.subscribe(function(messages) {
    messages.forEach((message) => render(message, false));
  }).dispose();

  const pushSub = chatIO.pushPub.subscribe(function(message) {
    render(message, true);
  });

  if (!chatIO.messages.length) {
    chatIO.push(new Message({body: 'You may change settings on the fly', kind: 'system'}));
  }

  $scope.$on('$destroy', function(){
    pushSub.dispose();
  });
}

angular.module('starter.controllers').controller('ImChatCtrl', ['$scope', '$compile', 'Message', 'chatIO', ctrl]);
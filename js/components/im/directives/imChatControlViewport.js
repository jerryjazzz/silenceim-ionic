function directive(Message, utils, chatIO) {

  const ENTER_KEY = 13;

  return {
    restrict: 'C',

    link: function($scope, element) {
      const $el = $(element);
      const $textarea = $el.find('textarea');

      function submit(text) {
        chatIO.push(new Message({body: text, kind: 'out'}));
      }

      function clickBtn() {
        const text = $textarea.val();
        
        if (utils.isPresent(text)) {
          submit(text);
          $textarea.val('');
        }
      }

      $textarea.keypress(function(e) {
        if (e.ctrlKey && e.keyCode === ENTER_KEY) {
          $textarea.val($textarea.val() + "\n");
        } else if (e.keyCode === ENTER_KEY) {
          e.preventDefault();
          // todo click button
          clickBtn();
        }
      });

      $scope.$on('$destroy', function() {
        $textarea.off();
        $el.off();
      });
    }
  };
}

angular.module('starter.controllers').directive('imChatControlViewport', ['Message', 'utils', 'chatIO', directive]);

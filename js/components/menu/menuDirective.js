function directive(settings) {
  return {
    restrict: 'A',
    link: function($scope, element) {
      const $el = $(element);
      const $items = $el.find('ion-item[data-setting]');

      function update() {
        $.each($items, function(_i, item) {
          const $item = $(item);
          const isOn = !!settings.get($item.attr('data-setting'));
          $item.toggleClass('on', isOn);
        });
      }

      settings.observer.subscribe(update);
      update();
    }
  };
}

angular.module('starter').directive('menuDirective', ['settings', directive]);

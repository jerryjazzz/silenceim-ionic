function directive(settings, preferences) {
  return {
    restrict: 'A',
    link: function($scope, element) {
      const $el = $(element);
      const $items = $el.find('ion-item[data-preference]');

      function update() {
        $.each($items, function(_i, item) {
          const $item = $(item);
          $item.toggleClass('on', preferences.is($item.attr('data-preference')));
        });
      }

      settings.observer.subscribe(update);

      update();
    }
  };
}

angular.module('starter').directive('menuDirective', ['settings', 'preferences', directive]);

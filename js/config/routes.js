function config($stateProvider, $urlRouterProvider) {
  $stateProvider.state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  }).state('app.landing', {
    url: '/landing',
    views: {
      'menuContent': {
        templateUrl: 'templates/landing.html'
      }
    }
  });

  // Cipher settings
  $stateProvider.state('app.rc4', {
    url: '/rc4',
    views: {
      'menuContent': {
        templateUrl: 'templates/rc4.html',
        controller: 'Rc4Ctrl'
      }
    }
  }).state('app.aes', {
    url: '/aes',
    views: {
      'menuContent': {
        templateUrl: 'templates/aes.html',
        controller: 'AesCtrl'
      }
    }
  }).state('app.pgp', {
    url: '/pgp',
    views: {
      'menuContent': {
        templateUrl: 'templates/pgp.html',
      }
    }
  }).state('app.pgp_generate', {
    url: '/pgp/generate',
    views: {
      'menuContent': {
        templateUrl: 'templates/pgp_generate.html',
        controller: 'PgpGenerateCtrl'
      }
    }
  });

  // About
  $stateProvider.state('app.about', {
    url: '/about',
    views: {
      'menuContent': {
        templateUrl: 'templates/about.html'
      }
    }
  }).state('app.about_license', {
    url: '/about/license',
    views: {
      'menuContent': {
        templateUrl: 'templates/about_license.html'
      }
    }
  }).state('app.about_vendors', {
    url: '/about/vendors',
    views: {
      'menuContent': {
        templateUrl: 'templates/about_vendors.html'
      }
    }
  });

  // Landing + 404
  $urlRouterProvider.otherwise('/app/landing');
}

angular.module('starter').config(['$stateProvider', '$urlRouterProvider', config]);

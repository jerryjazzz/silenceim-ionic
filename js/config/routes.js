function config($stateProvider, $urlRouterProvider) {
  $stateProvider.state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  }).state('app.landing', {
    url: '/landing',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/landing.html',
        controller: 'LandingCtrl'
      }
    }
  });

  // IM
  $stateProvider.state('app.im', {
    url: '/@',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/im.html',
        controller: 'ImCtrl'
      }
    }
  }).state('app.im.chat', {
    url: '/chat',
    cache: false,
    views: {
      'chat-tab': {
        templateUrl: 'templates/im/chat_tab.html',
      },
    }
  }).state('app.im.users', {
    url: '/users',
    cache: false,
    views: {
      'users-tab': {
        templateUrl: 'templates/im/users_tab.html',
      },
    }
  }).state('app.im.room', {
    url: '/room',
    cache: false,
    views: {
      'room-tab': {
        templateUrl: 'templates/im/room_tab.html',
        controller: 'ImRoomCtrl'
      },
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
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/pgp.html',
        controller: 'PgpCtrl'
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
  }).state('app.pgp_my_private', {
    url: '/pgp/my-private',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/pgp_my_private.html',
        controller: 'PgpMyPrivateCtrl'
      }
    }
  }).state('app.pgp_my_public', {
    url: '/pgp/my-public',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/pgp_my_public.html',
        controller: 'PgpMyPublicCtrl'
      }
    }
  }).state('app.pgp_buddy_public', {
    url: '/pgp/buddy-public',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/pgp_buddy_public.html',
        controller: 'PgpBuddyPublicCtrl'
      }
    }
  });

  // Mobile download
  $stateProvider.state('app.android', {
    url: '/android',
    views: {
      'menuContent': {
        templateUrl: 'templates/download/android.html',
        controller: 'DownloadAndroidCtrl'
      }
    }
  }).state('app.blackberry', {
    url: '/blackberry',
    views: {
      'menuContent': {
        templateUrl: 'templates/download/blackberry.html'
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
  }).state('app.about_feedback', {
    url: '/about/feedback',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/about_feedback.html',
        controller: 'AboutFeedbackCtrl'
      }
    }
  }).state('app.about_vendors', {
    url: '/about/vendors',
    views: {
      'menuContent': {
        templateUrl: 'templates/about_vendors.html'
      }
    }
  }).state('app.about_security', {
    url: '/about/security',
    views: {
      'menuContent': {
        templateUrl: 'templates/about_security.html'
      }
    }
  }).state('app.about_tutorial', {
    url: '/about/tutorial',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/about_tutorial.html',
        controller: 'AboutTutorialCtrl'
      }
    }
  });

  // Landing + 404
  $urlRouterProvider.otherwise('/app/landing');
}

angular.module('starter').config(['$stateProvider', '$urlRouterProvider', config]);

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'MenuCtrl'
  })
  
  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })

  .state('app.teste', {
    url: '/teste',
    views: {
      'menuContent': {
        templateUrl: 'templates/teste.html'
      }
    }
  })

  .state('app.form', {
    url: '/form',
    views: {
      'menuContent': {
        templateUrl: 'templates/form.html'
      }
    }
  })

  .state('app.buttonsBasic', {
    url: '/buttonsBasic',
    views: {
      'menuContent': {
        templateUrl: 'templates/buttons/basic.html'
      }
    }
  })

  .state('app.buttonsBlock', {
    url: '/buttonsBlock',
    views: {
      'menuContent': {
        templateUrl: 'templates/buttons/block.html'
      }
    }
  })

  .state('app.buttonsIcons', {
    url: '/buttonsIcons',
    views: {
      'menuContent': {
        templateUrl: 'templates/buttons/icons.html'
      }
    }
  })

  .state('app.buttonsFullWidth', {
    url: '/buttonsFullWidth',
    views: {
      'menuContent': {
        templateUrl: 'templates/buttons/full-width.html'
      }
    }
  })

  .state('app.buttonsOutlined', {
    url: '/buttonsOutlined',
    views: {
      'menuContent': {
        templateUrl: 'templates/buttons/outlined.html'
      }
    }
  })

  .state('app.buttonsClear', {
    url: '/buttonsClear',
    views: {
      'menuContent': {
        templateUrl: 'templates/buttons/clear.html'
      }
    }
  })

  .state('app.buttonsBar', {
    url: '/buttonsBar',
    views: {
      'menuContent': {
        templateUrl: 'templates/buttons/bar.html'
      }
    }
  })

  .state('app.list', {
    url: '/list',
    views: {
      'menuContent': {
        templateUrl: 'templates/list.html'
      }
    }
  })

  .state('app.toggle', {
    url: '/toggle',
    views: {
      'menuContent': {
        templateUrl: 'templates/toggle.html'
      }
    }
  });

  $urlRouterProvider.otherwise('/app/home');
});
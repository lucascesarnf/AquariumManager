angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.controller', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/controller.html',
        controller: 'controllerCtrl'
      }
    }
  })

  .state('menu.fish', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fish.html',
        controller: 'fishCtrl'
      }
    }
  })

  .state('menu.build', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/build.html',
        controller: 'buildCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.test', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/test.html',
        controller: 'testCtrl'
      }
    }
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page6',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

$urlRouterProvider.otherwise('/page5')

  

});
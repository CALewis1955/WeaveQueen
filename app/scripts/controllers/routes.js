'use strict';

angular.module('weaveQueenApp')

  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider) {


  /* pretty Angular URLs
   $locationProvider.html5Mode({
   enabled: true,
   requireBase: false
   });
   */
  // the default route
  $urlRouterProvider.otherwise('/');


  $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl as main'
    })

    .state('main', {
      url: '/main',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl as main'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl as about'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl as contact'
    })
    .state('votes', {
      url: '/votes',
      templateUrl: 'views/votes.html',
      controller: 'VotesCtrl as votes'
    })
    .state('battles', {
      url: '/battles',
      templateUrl: 'views/battles.html',
      controller: 'BattlesCtrl as battle'
    })
    .state('favorites', {
      url: '/favorites',
      templateUrl: 'views/favorites.html',
      controller: 'FavoritesCtrl as favorites'
    })
    .state('upload', {
      url: '/upload',
      templateUrl: 'views/upload.html',
      controller: 'UploadCtrl as upload'
    })
    .state('settings', {
      url: '/settings',
      templateUrl: 'views/settings.html',
      controller: 'SettingsCtrl as settings'
    });
}]);



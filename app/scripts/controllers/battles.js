'use strict';

/**
 * @ngdoc function
 * @name weaveQueenApp.controller:BattlesCtrl
 * @description
 * # BattlesCtrl
 * Controller of the weaveQueenApp
 */
angular.module('weaveQueenApp')
  .constant('DOMAIN', "http://localhost:9000")
  .controller('BattlesCtrl', battlesCtrl);

function battlesCtrl($scope, DOMAIN) {
  $scope.weaves = [
    {
      nickname: 'Kim',
      source: '/images/Kim.jpg',
      id: 1,
      votes: 0
    },

    {
      nickname: 'Anne',
      source: '/images/IMG_0141.JPG',
      id: 2,
      votes: 0
    },
    {
      nickname: 'Barbara',
      source: '/images/IMG_0147.JPG',
      id: 3,
      votes: 0
    },
    {
      nickname: 'Cindy',
      source: '/images/IMG_0151.JPG',
      id: 4,
      votes: 0
    },
    {
      nickname: 'Darla',
      source: '/images/IMG_0158.JPG',
      id: 5,
      votes: 0
    },
    {
      nickname: 'Erica',
      source: '/images/IMG_0284.JPG',
      id: 6,
      votes: 0
    },
    {
      nickname: 'Fanny',
      source: '/images/IMG_0340.JPG',
      id: 7,
      votes: 0
    }
  ];
  $scope.randomWeave1 = $scope.weaves[randomIndex()];
  $scope.randomWeave2 = $scope.weaves[randomIndex()];
  $scope.vote = vote;

  function randomIndex() {
    return Math.floor(Math.random() * $scope.weaves.length);
  }


  function vote() {
    var url = event.target.src;
    var name = '';
    var winner = url.slice(DOMAIN.length);
    $scope.weaves.forEach(function(w){
      console.log(w.source);
      console.log(winner);
      if (w.source == winner) {
        name = w.nickname;
        w.votes += 1;
      }
      return name;
   });
   console.log($scope.weaves);

  }










}

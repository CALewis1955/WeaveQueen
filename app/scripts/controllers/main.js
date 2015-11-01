'use strict';

/**
 * @ngdoc function
 * @name weaveQueenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weaveQueenApp
 */
angular.module('weaveQueenApp')
  .controller('MainCtrl', mainCtrl);

function mainCtrl($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }

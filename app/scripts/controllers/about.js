'use strict';

/**
 * @ngdoc function
 * @name weaveQueenApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the weaveQueenApp
 */
angular.module('weaveQueenApp')
  .controller('AboutCtrl', aboutCtrl);

function aboutCtrl($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }

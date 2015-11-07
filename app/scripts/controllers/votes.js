'use strict';

/**
 * @ngdoc function
 * @name weaveQueenApp.controller:VotesCtrl
 * @description
 * # VotesCtrl
 * Controller of the weaveQueenApp
 */
angular.module('weaveQueenApp')
  .controller('VotesCtrl',['DOMAIN', 'Weaves', votesCtrl]);

function votesCtrl(DOMAIN, Weaves) {
  var votes = this;
  votes.weaves = Weaves;

}



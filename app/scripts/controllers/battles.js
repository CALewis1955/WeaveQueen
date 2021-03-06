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
  .controller('BattlesCtrl', ['DOMAIN', 'Weaves', battlesCtrl]);

function battlesCtrl(DOMAIN, Weaves) {
  var battle = this;
  battle.weaves = Weaves;
  console.log(battle.weaves.all());
  battle.contestant = battle.weaves.getContestant();
  battle.challenger = battle.weaves.getChallenger();
}

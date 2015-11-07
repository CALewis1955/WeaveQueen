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
  battle.weaves = Weaves.all();
  battle.contestant = Weaves.getRandom();
  battle.challenger = Weaves.getRandom();
  while (battle.challenger === battle.contestant) {
    battle.challenger = Weaves.getRandom();
  };
  console.log(battle.contestant)
  console.log(battle.challenger);
  battle.vote = vote;
  battle.winner = Weaves.winner;
  battle.loser = Weaves.loser;
  if (battle.winner && battle.loser) {
    (Weaves.loser.votes == 0) ? battle.winningPercent = 100 :
      battle.winningPercent = (battle.winner.votes/(battle.loser.votes + battle.winner.votes)) * 100;
  };
  battle.losingPercent = 1 - battle.winningPercent;
  console.log(battle.winningPercent);

  function vote() {
    var url = event.target.src;
    var name = '';
    var winner = url.slice(DOMAIN.length);
    battle.weaves.forEach(function(w){
      if (w.source == winner) {
        w.votes += 1;
        battle.winner = w;
        Weaves.winner = w;
      }
      Weaves.loser = (battle.contestant !== battle.winner) ? battle.contestant : battle.challenger;
    });
    console.log(battle.winner);
   return {winner :Weaves.winner, loser: Weaves.loser};
  }
  console.log(Weaves.winner);
}










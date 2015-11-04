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
  console.log(battle.contestant)
  console.log(battle.challenger);
  battle.vote = vote;
  battle.winner = Weaves.winner;


  function vote() {
    var url = event.target.src;
    var name = '';
    var winner = url.slice(DOMAIN.length);
    battle.weaves.forEach(function(w){
      console.log(w.source);
      console.log(winner);
      if (w.source == winner) {
        w.votes += 1;
        battle.winner = w;
        Weaves.winner = w;
      }
      console.log(battle.winner);

   });
    console.log(battle.winner);
   return Weaves.winner;
  }
  console.log(Weaves.winner);
}










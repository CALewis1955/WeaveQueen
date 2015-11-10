'use strict';

/**
 * @ngdoc function
 * @name weaveQueenApp.factory:Weaves
 * @description
 * # Weaves
 * Factory for the weaveQueenApp
 */
angular.module('weaveQueenApp')
  .factory('Weaves', ['DOMAIN', Weaves]);



function Weaves(DOMAIN) {
  var weaves = this,
    objects = [
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
    },

    ],
    winner, loser, randomIndex, all, get, getRandom, contestant, challenger,
    vote, getWinner, getLoser, winningPercent, losingPercent,
    getContestant, getChallenger, doBattle;

  randomIndex = function() {
    return Math.floor(Math.random() * objects.length);
  };

  all = function() {
    return objects;
  };

  get = function(id) {
    return objects[id];
  };

  getWinner = function() {
    return weaves.winner;
  };

  getLoser = function() {
    return weaves.loser;
  };

  getRandom = function() {
    return objects[randomIndex];
  };

  contestant = {};

  challenger = {};

  getContestant = function() {
    contestant = getRandom();
    return contestant;
  };

  getChallenger = function() {
    challenger = getRandom();
    while (challenger === contestant) {
      challenger = getRandom();
    }
    return challenger;
  };

  winner = {};

  loser = {};

  winningPercent = function() {
    var winningPercent;
    if (weaves.winner && weaves.loser) {
      (weaves.loser.votes === 0) ? winningPercent = 100 : winningPercent = (weaves.winner.votes / (weaves.loser.votes + weaves.winner.votes)) * 100;
    }
    return winningPercent;
  };

  losingPercent =  function() {
    var losingPercent;
    if (weaves.winner && weaves.loser) {
      (weaves.loser.votes === 0) ? losingPercent = 0 : losingPercent = (weaves.loser.votes / (weaves.loser.votes + weaves.winner.votes)) * 100;
    }
    return losingPercent;
  };

  vote = function() {
    var url = event.target.src;
    var winner = url.slice(DOMAIN.length);
    objects.forEach(function(w){
      if (w.source === winner) {
        w.votes += 1;
        winner = w;
      }
      loser = (contestant !== winner) ? contestant : challenger;
    });
    weaves.winner = winner;
    weaves.loser = loser;
  };

  return {
    all : all,
    get : get,
    getContestant: getContestant,
    getChallenger: getChallenger,
    vote : vote,
    getWinner: getWinner,
    getLoser: getLoser,
    winningPercent : winningPercent,
    losingPercent : losingPercent
  };
}

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



  var weaves = [
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

  function all() {
    return weaves;
  }

  function get(id) {
    return weaves[id];
  }

  function getRandom() {
    return weaves[randomIndex()];
  }

  function randomIndex() {
    return Math.floor(Math.random() * weaves.length);
  }


  function vote() {
    var url = event.target.src;
    var name = '';
    var winner = url.slice(DOMAIN.length);
    weaves.forEach(function (w) {
      console.log(w.source);
      console.log(winner);
      if (w.source == winner) {
        w.votes += 1;
      }
      return w;
    });
  }
    return {
      all : all,
      get : get,
      getRandom : getRandom
    };

}

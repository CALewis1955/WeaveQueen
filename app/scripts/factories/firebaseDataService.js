/**
 * Created by christopherlewis on 11/14/15.
 */
(function() {
  'use strict';
  angular.module('weaveQueenApp')
    .constant('FIREBASE_URL', "https://weavequeen.firebaseio.com/")
    .factory('firebaseDataService', firebaseDataService);

  firebaseDataService.$inject = ['FIREBASE_URL', '$firebaseArray'];

  function firebaseDataService (FIREBASE_URL, $firebaseArray){

    var service = this;
    var ref = new Firebase(FIREBASE_URL);


    var addWeave = function(weave){
      weavesRef.push({
        nickname: weave.nickname,
        source: weave.source,
        id: weave.id,
        votes: weave.votes,
        dataURL: 'dataURL'
      });
    };

    var getAll = function() {
      var obj = $firebaseArray(ref);
      console.log(obj);
      return obj;
    };


    return {
      addWeave : addWeave,
      getAll : getAll
    };
  }


})();

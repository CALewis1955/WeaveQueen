'use strict';

/**
 * @ngdoc function
 * @name weaveQueenApp.controller:UploadCtrl
 * @description
 * # UploadCtrl
 * Controller of the weaveQueenApp
 */
angular.module('weaveQueenApp')
  .constant('DOMAIN', "http://localhost:9000")
  .constant('PATH', '/Users/christopherlewis/WebstormProjects/WeaveQueen/app/images/')
  .controller('UploadCtrl', ['$scope', '$http', 'DOMAIN', 'PATH', 'firebaseDataService', uploadCtrl]);




function uploadCtrl($scope, $http, DOMAIN, PATH, firebaseDataService) {
  $scope.selectPhoto = function (elm) {
    $scope.files = elm.files[0];
    var tmppath = URL.createObjectURL(event.target.files[0]);
    $scope.src = tmppath;
    //$("img").fadeIn("fast").attr('src',URL.createObjectURL(event.target.files[0]));
    //$("#disp_tmp_path").html("Temporary Path(Copy it and try pasting it in browser address bar) --> <strong>["+tmppath+"]</strong>");
    $scope.$apply();
  };



  //$scope.sendData = function () {
  //
  //  var fr = new FileReader;
  //
  //  fr.onload = function() {
  //    var img = new Image;
  //
  //    img.onload = function() {
  //      alert(img.width);
  //    };
  //
  //    img.src = fr.result;
  //  };
  //
  //  fr.readAsDataURL($scope.files);
  //  console.log($scope.files);
  //
  //  console.log("upload is firing");
  //  $http.post('firebase', $scope.files,
  //    {
  //      headers: {'Content-Type': 'multipart/form-data'}
  //    })
  //    .success(function (d) {
  //      console.log(d);
  //    });
  //}
}

//$('input').change(function() {
//
//  var fr = new FileReader;
//
//  fr.onload = function() {
//    var img = new Image;
//
//    img.onload = function() {
//      alert(img.width);
//    };
//
//    img.src = fr.result;
//  };
//
//  fr.readAsDataURL(this.files[0]);
//
//});

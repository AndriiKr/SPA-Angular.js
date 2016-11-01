"use strict"
  
  var app = angular.module('app', ['ngSanitize']);

  app.controller('AppController', ['$scope', '$sce', function($scope, $sce) {
    $scope.username = "Andrey";
    $scope.htmlData = "Hello <strong>Beach!</strong>";
    $scope.posters = POSTERS;
    $scope.quantity = 10;
  }]);



//ng-bind-html=""
//ng-repeat="item in posters"
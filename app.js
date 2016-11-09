"use strict"
  
  var app = angular.module('app', ['ngSanitize']);

  app.controller('AppController', ['$scope', '$sce', function($scope, $sce, $log) {
  	$scope.posters = POSTERS;

    //tabs
    $scope.tab = POSTERS[8];
    $scope.setTab = function(item){
      $scope.tab = item;
    };
    $scope.isSet = function(tabName){
      return $scope.tab === tabName;
    };

    $scope.returnImg = function (){
    }
     $scope.orderFunction = function(value) {

    if(value.title == "The grand tour"){
            return -1; 
    }else{
        return value.title;
    }
   }
  }]);

 
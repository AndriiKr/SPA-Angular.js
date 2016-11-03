"use strict"
  
  var app = angular.module('app', ['ngSanitize']);

  app.controller('AppController', ['$scope','$log', '$sce', function($scope, $sce, $log) {
  	$scope.$log = $log;
  	$scope.posters = POSTERS;
    $scope.quantity = 10;
    $scope.active = 'active';
    $scope.returnImg = function (){
    }
     $scope.orderFunction = function(value) {

    if(value.title == "The grand tour"){
            return -1; 
    }else{
        return value.title;
    }
   }
    $scope.activeItem = POSTERS[8];
    $scope.setActive = function(menuItem) {
    $scope.activeItem = menuItem
 }

 $scope.data = {
    model: null,
    POSTERS
   };

   $scope.task = function(taskItem){
    alert("Task item is "+taskItem);
  };
  $scope.taskTitle = function(taskItem){
    var elem = document.getElementById('title');
    return elem.innerHTML = taskItem;
  };
    $scope.taskDeskr = function(taskItem){
    var elem = document.getElementById('deskr');
    return elem.innerHTML = taskItem;
  };
    $scope.taskImg = function(taskItem){
    var elem = document.getElementById('image');
    return elem.setAttribute( "src", "resources" + taskItem);
  };
  }]);

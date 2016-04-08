angular.module('starter.controllers', [])

.controller('indexController', function($scope, $ionicSideMenuDelegate) {
  $scope.openSideMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  }
})


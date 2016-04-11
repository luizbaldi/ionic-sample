angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
	$scope.settingsList = [
	    { text: "Wireless", checked: true },
	    { text: "GPS", checked: false },
	    { text: "Bluetooth", checked: false }
	  ];
});
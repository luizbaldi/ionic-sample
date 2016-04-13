angular.module('starter.controllers', [])

.controller('MenuCtrl', function($scope, $ionicModal, $timeout) {
	$scope.openSub = function(name) {
	    $scope.submenu = true;
	    $scope.selection = name;
	};
	
	$scope.backToMain = function() {
	    $scope.submenu = false;
	    $scope.selection = 'main';
	};

	$scope.settingsList = [
	    { text: "Wireless", checked: true },
	    { text: "GPS", checked: false },
    	{ text: "Bluetooth", checked: false }
	];

});
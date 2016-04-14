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

	/* toDo
	Create a separate file for List Controller 
	-- */
	$scope.listItems = [
		{name: "Item 1"},
		{name: "Item 2"},
	 	{name: "Item 3"}
	];

	$scope.listContacts = [
		{
			name: "Luiz Baldi",
			description: "Balde means Bucket, funny don't you think!?"
		},
		{
			name: "Lucas Lopes",
			description: "Weirdo guy"
		},
		{
			name: "Banana Guy",
			description: "I'm a Banana!"
		}
	]
});
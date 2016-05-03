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
		{
			text: "Wireless",
			checked: true
		},
		{
			text: "GPS",
			checked: false
		},
		{
			text: "Bluetooth",
			checked: false
		}
	];

	/* toDo
	Create a separate file for List Controller
	-- */
	$scope.listItems = [
		{
			name: "Item 1"
		},
		{
			name: "Item 2"
		},
		{
			name: "Item 3"
		}
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

	$scope.show = function() {

   		// Show the action sheet
		var hideSheet = $ionicActionSheet.show({
			buttons: [{
				text: '<b>Share</b> This'
			}, {
				text: 'Move'
			}],
			destructiveText: 'Delete',
			titleText: 'Modify your album',
			cancelText: 'Cancel',
			cancel: function() {
				// add cancel code..
			},
			buttonClicked: function(index) {
				return true;
			}
		});

		// For example's sake, hide the sheet after two seconds
		$timeout(function() {
			hideSheet();
		}, 2000);
	};
});

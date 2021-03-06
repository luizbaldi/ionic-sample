// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		if (window.cordova && window.cordova.plugins.Keyboard) {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

			// Don't remove this line unless you know what you are doing. It stops the viewport
			// from snapping when text inputs are focused. Ionic handles this internally for
			// a much nicer keyboard experience.
			cordova.plugins.Keyboard.disableScroll(true);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

	   .state('app', {
		url: '/app',
		abstract: true,
		templateUrl: 'templates/menu.html',
		controller: 'MenuCtrl'
	})

	.state('app.home', {
		url: '/home',
		views: {
			'menuContent': {
				templateUrl: 'templates/home.html'
			}
		}
	})

	//-- Buttons Menu
	.state('app.buttonsBasic', {
		url: '/buttonsBasic',
		views: {
			'menuContent': {
				templateUrl: 'templates/buttons/basic.html'
			}
		}
	})

	.state('app.buttonsBlock', {
		url: '/buttonsBlock',
		views: {
			'menuContent': {
				templateUrl: 'templates/buttons/block.html'
			}
		}
	})

	.state('app.buttonsIcons', {
		url: '/buttonsIcons',
		views: {
			'menuContent': {
				templateUrl: 'templates/buttons/icons.html'
			}
		}
	})

	.state('app.buttonsFullWidth', {
		url: '/buttonsFullWidth',
		views: {
			'menuContent': {
				templateUrl: 'templates/buttons/full-width.html'
			}
		}
	})

	.state('app.buttonsOutlined', {
		url: '/buttonsOutlined',
		views: {
			'menuContent': {
				templateUrl: 'templates/buttons/outlined.html'
			}
		}
	})

	.state('app.buttonsClear', {
		url: '/buttonsClear',
		views: {
			'menuContent': {
				templateUrl: 'templates/buttons/clear.html'
			}
		}
	})

	.state('app.buttonsBar', {
		url: '/buttonsBar',
		views: {
			'menuContent': {
				templateUrl: 'templates/buttons/bar.html'
			}
		}
	})

	//-- List Menu
	.state('app.listBasic', {
		url: '/listBasic',
		views: {
			'menuContent': {
				templateUrl: 'templates/list/basic.html'
			}
		}
	})

	.state('app.listAvatars', {
		url: '/listAvatars',
		views: {
			'menuContent': {
				templateUrl: 'templates/list/avatars.html'
			}
		}
	})

	.state('app.listButtons', {
		url: '/listButtons',
		views: {
			'menuContent': {
				templateUrl: 'templates/list/buttons.html'
			}
		}
	})

	.state('app.listDivider', {
		url: '/listDivider',
		views: {
			'menuContent': {
				templateUrl: 'templates/list/divider.html'
			}
		}
	})

	.state('app.listIcons', {
		url: '/listIcons',
		views: {
			'menuContent': {
				templateUrl: 'templates/list/icons.html'
			}
		}
	})

	.state('app.listInset', {
		url: '/listInset',
		views: {
			'menuContent': {
				templateUrl: 'templates/list/inset.html'
			}
		}
	})

	.state('app.listThumbnails', {
		url: '/listThumbnails',
		views: {
			'menuContent': {
				templateUrl: 'templates/list/thumbnails.html'
			}
		}
	})

	.state('app.form', {
		url: '/form',
		views: {
			'menuContent': {
				templateUrl: 'templates/form/form.html'
			}
		}
	})

	.state('app.toggle', {
		url: '/toggle',
		views: {
			'menuContent': {
				templateUrl: 'templates/toggle/toggle.html'
			}
		}
	})

	.state('app.checkbox', {
		url: '/checkbox',
		views: {
			'menuContent': {
				templateUrl: 'templates/checkbox/checkbox.html'
			}
		}
	})

	.state('app.radioButton', {
		url: '/radioButton',
		views: {
			'menuContent': {
				templateUrl: 'templates/radio-buttom/radio-buttom.html'
			}
		}
	})

	.state('app.range', {
		url: '/range',
		views: {
			'menuContent': {
				templateUrl: 'templates/range/range.html'
			}
		}
	})

	.state('app.select', {
		url: '/select',
		views: {
			'menuContent': {
				templateUrl: 'templates/select/select.html'
			}
		}
	})

	//-- Tabs Menu
	.state('app.tabsIconOnly', {
		url: '/tabsIconOnly',
		views: {
			'menuContent': {
				templateUrl: 'templates/tabs/icon-only.html'
			}
		}
	})

	.state('app.tabsLeftIcon', {
		url: '/tabsLeftIcon',
		views: {
			'menuContent': {
				templateUrl: 'templates/tabs/left-icon.html'
			}
		}
	})

	.state('app.tabsStripedIcon', {
		url: '/tabsStripedIcon',
		views: {
			'menuContent': {
				templateUrl: 'templates/tabs/striped-style.html'
			}
		}
	})

	.state('app.tabsTopIcon', {
		url: '/tabsTopIcon',
		views: {
			'menuContent': {
				templateUrl: 'templates/tabs/top-icon.html'
			}
		}
	})

	//-- Grid Menu
	.state('app.gridEvenColumns', {
		url: '/gridEvenColumns',
		views: {
			'menuContent': {
				templateUrl: 'templates/grid/even-columns.html'
			}
		}
	})

	.state('app.gridExplicitColumn', {
		url: '/gridExplicitColumn',
		views: {
			'menuContent': {
				templateUrl: 'templates/grid/explicit-column-sizes.html'
			}
		}
	})

	.state('app.gridOffsetColumn', {
		url: '/gridOffsetColumn',
		views: {
			'menuContent': {
				templateUrl: 'templates/grid/explicit-column-sizes.html'
			}
		}
	})

	.state('app.gridResponsive', {
		url: '/gridResponsive',
		views: {
			'menuContent': {
				templateUrl: 'templates/grid/responsive.html'
			}
		}
	})

	.state('app.gridVerticallyAlligned', {
		url: '/gridVerticallyAlligned',
		views: {
			'menuContent': {
				templateUrl: 'templates/grid/vertically-aligned.html'
			}
		}
	});

	$urlRouterProvider.otherwise('/app/home');
});

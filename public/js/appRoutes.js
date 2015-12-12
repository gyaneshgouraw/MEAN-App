angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
		    templateUrl: 'views/nerd.html',
		    controller: 'DashboardController'
		})

		.when('/dashboard', {
		    templateUrl: 'views/nerd.html',
		    controller: 'DashboardController'
		})

		.when('/aboutme', {
		    templateUrl: 'views/home.html',
		    controller: 'MainController'
		})
     .otherwise({
         redirectTo: '/'
     });

	$locationProvider.html5Mode(true);

}]);


var site = angular.module('megCanal', ['ngRoute']);

site.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/home', {
				templateUrl: 'home.html'
			}).
			when('/cakesandcookies', {
				templateUrl: 'cakesandcookies.html'
			}).
			when('/bread', {
				templateUrl: 'bread.html'
			}).
			when('/andmore', {
				templateUrl: 'andmore.html'
			}).
			when('/contact', {
				templateUrl: 'contact.html'
			}).
			otherwise({
				redirectTo: '/home'
			});
	}
]);

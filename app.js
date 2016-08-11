var app = angular.module('dough', ['ngRoute', 'ui.bootstrap', 'firebase']);

app.config(function($routeProvider){

$routeProvider

	.when('/', {
		templateUrl: 'mainTemp.html',
		controller: 'mainCtrl'
	})

	.when('/stock', {
		templateUrl: 'stock/stockTemp.html',
		controller: 'stockCtrl'
	})

	.when('/bond', {
		templateUrl: 'bond/bondTemp.html',
		controller: 'bondCtrl'
	})

	.when('/derivative', {
		templateUrl: 'derivative/derivativeTemp.html',
		controller: 'derivativeCtrl'
	})

	.when('/cash', {
		templateUrl: 'cash/cashTemp.html',
		controller: 'cashCtrl'
	})

	.when('/login', {
		templateUrl: 'login/loginTemp.html',
		controller: 'loginCtrl'
	})

	.when('/register', {
		templateUrl: 'login/registerTemp.html',
		controller: 'registerCtrl'
	})

	.otherwise('', {
		redirectTo: '/'
	})
})


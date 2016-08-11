var app = angular.module('dough');

app.controller('registerCtrl', function($scope, mainService, $firebaseObject){
	$scope.user = {};  //attache email and password to user
	$scope.email;
	$scope.password;

	$scope.register = function(email, password) {
		$scope.user = 
		{ 
		  email : $scope.email, 
		  password : $scope.password
		}

		mainService.register($scope.user);
		console.log($scope.user)
	}	
});
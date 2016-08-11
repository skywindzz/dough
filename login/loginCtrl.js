var app = angular.module('dough');

app.controller('loginCtrl', function($scope,mainService, $firebaseObject, $firebaseAuth){
	$scope.user = {};
	$scope.email;
	$scope.password;

	$scope.login = function(email, password){
		$scope.user = {
			email : $scope.email,
			password: $scope.password
		}
		mainService.login($scope.user);
	}

});
	

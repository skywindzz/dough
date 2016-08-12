var app = angular.module('dough');

app.controller('derivativeCtrl', function($window, $scope){
	$scope.test = "test";
	$window.location.href= "http://www.investopedia.com/terms/d/derivative.asp?ad=dirN&qo=investopediaSiteSearch&qsrc=0&o=40186";
})
var app = angular.module('dough');

app.controller('cashCtrl', function($window, $scope){
	$scope.test = "test";
	$window.location.href="http://www.investopedia.com/terms/c/cash.asp?ad=dirN&qo=investopediaSiteSearch&qsrc=0&o=40186";

})
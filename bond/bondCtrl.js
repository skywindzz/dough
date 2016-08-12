var app = angular.module('dough');

app.controller('bondCtrl', function($window, $scope){
	$scope.test = 'test';
	$window.location.href= "http://www.investopedia.com/terms/b/bond.asp?ad=dirN&qo=serpSearchTopBox&qsrc=1&o=40186"
})
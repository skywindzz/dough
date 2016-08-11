var app = angular.module('dough');

app.controller('mainCtrl', function($scope,mainService) {
$scope.quote;

$scope.test = "test";

$scope.myInterval = 3000;

$scope.slides = [
    {
      image: 'images/wallstreet.jpg',
      caption: 'DOUGH',
      text: 'Want to know different ways to get broke? Pick your poison',
    },
    {
      image: 'images/stockcert.jpg',
      caption: 'STOCK',
      text: 'The best way to help the company you like to take over your world, literally.',
      link: 'stock'
    },
    {
      image: 'images/unclesam.jpeg',
      caption: 'BOND',
      text: 'Buy more bonds!! Do your part in allowing uncle sam to double our national debt within a decade!!! PS. This message is approved by: Barak Obama and George Bush',
      link: 'bond'
    },
    {
      image: 'images/nuclear.jpeg',
      caption: 'DERIVATIVES',
      text: 'Mr.Bush : We couldn\'t find any Weapon of Mess Destructions in Iraq. But don\'t worry, I\'ve built one and blew it right in our backyard. HOW BRILLIANT!!!',
      link: 'derivative'
    },
    {
      image: 'images/money.jpeg',
      caption: 'CASH',
      text: 'Money, backed by government which gives your a promise and then returns a promise which is essentially nothing but a promise. Wait.. why does this sound so familiar somehow?',		
      link: 'cash'
    }
];


// stockQoute function will run once submit button is clicked
// and take user to stockQuote template
$scope.stockQuote = function(quote) {

}



})
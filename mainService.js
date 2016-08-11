var app = angular.module('dough');

app.service('mainService', function($http, $q, $firebaseObject, $firebaseAuth, $firebaseArray){


//register service

var firebaseOrigin = new Firebase("https://flickering-torch-1478.firebaseIO.com/");
var firebaseRef = new Firebase("https://flickering-torch-1478.firebaseIO.com/users");

this.register = function(user){
	firebaseOrigin.createUser({
	  email    : user.email,
	  password : user.password 
	}, function(error, userData) {
	  if (error) {
	    console.log("Error creating user:", error);
	  } else {
	  	var users = $firebaseArray(firebaseRef);
	  	users.$add(userData);
	    console.log("Successfully created user account with uid:", userData.uid);
	  }
	});
}

//login service 

this.login = function(user){
	firebaseOrigin.authWithPassword({
  		email    : user.email,
  		password : user.password
}, function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});

}



//http get to yahoo API based on return from $scope.quote	

})



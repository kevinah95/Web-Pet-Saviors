'use strict';

app.controller('loginCtrl', function ($scope, loginService) {
	sessionStorage.setItem("islogged" , null);

	//Llama a la funcion loginService.login() dentro de 'services/loginService.js'
	$scope.login=function(user){
		 
		loginService.login(user,$scope); 
	};
	
});
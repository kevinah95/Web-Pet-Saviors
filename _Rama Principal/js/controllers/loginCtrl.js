'use strict';

app.controller('loginCtrl', function ($scope, loginService) {
	sessionStorage.setItem("islogged" , null);
	$scope.login=function(user){
		 
		loginService.login(user,$scope); //llama a la funcion loginService.login() dentro de 'services/loginService.js'
	};
	
});
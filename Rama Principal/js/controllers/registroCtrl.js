'use strict';

app.controller('registroCtrl', function ($scope, registroService) {
	$scope.msgtxt = '';
	
	$scope.crear=function(newUsuario){
		registroService.crear(newUsuario,$scope); //llama a la funcion loginService.login() dentro de 'services/loginService.js'
	};
	
});
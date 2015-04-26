'use strict';

app.controller('registroCtrl', function ($scope, registroService) {
		
	$scope.crear=function(newUsuario){
		registroService.crear(newUsuario,$scope); //llama a la funcion loginService.login() dentro de 'services/loginService.js'
	};
	
});
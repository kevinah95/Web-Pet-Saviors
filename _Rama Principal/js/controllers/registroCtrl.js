'use strict';

app.controller('registroCtrl', function ($scope, registroService) {
		
	//Llama a la funcion loginService.login() dentro de 'services/loginService.js'
	$scope.crear=function(newUsuario){
		
		$scope.verificarTel = parseInt(newUsuario.telefono, 10);
		if (isNaN($scope.verificarTel)){
			swal('Información Incorrecta','El número telefónico tiene un formato incorrecto, por favor ingrese solamente números','error');
		} else {
			registroService.crear(newUsuario,$scope); 
		}
		
	};
	
});
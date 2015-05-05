'use strict';

app.controller('navbarCtrl', ['$scope','loginService', '$location', function($scope,loginService,$location){
	$scope.logout=function(){
		loginService.logout();
	};
	$scope.verperfil=function(){
		$location.path('/perfil');
	};
	$scope.registrarMascota=function(){
		$scope.usuario = JSON.parse(sessionStorage.user);
		if ($scope.usuario.ES_RESCATISTA === 1){
			$location.path('/registrarMascota');	
		}else{
			swal('Privilegios Insuficientes','Usted debe de registrarse como rescatista para registrar a una mascota','error');
		};
		
	};
	$scope.users = function(){
	 	$location.path('/users');
	};
	$scope.pet = function(){
	 	$location.path('/pet');
	};
	$scope.testrecomendar = function(){
	 	$location.path('/testrecomendar');
	};
	$scope.listanegra = function(){
	 	$location.path('/listanegra');
	};
	$scope.vernotificaciones = function(){
	 	$location.path('/notificaciones');
	};
	$scope.veradopciones = function(){
	 	$location.path('/adopciones');
	};

	$scope.testadopcion = function(){
	 	$location.path('/testadopcion');
	};	
	$scope.agregartr = function(){
	 	$location.path('/agregartr');
	};	

}]);
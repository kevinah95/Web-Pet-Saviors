'use strict';

app.controller('navbarCtrl', ['$scope','loginService', '$location', function($scope,loginService,$location){
	
	//Llama a la función de cerrar sesión. 
	$scope.logout=function(){
		loginService.logout();
	};

	//Llama a la página de perfil. 
	$scope.verperfil=function(){
		$location.path('/perfil');
	};

	//Si el usuario tiene privilegios de rescatista carga la página de registrar mascota, si no muestra el mensaje de error. 
	$scope.registrarMascota=function(){
		$scope.usuario = JSON.parse(sessionStorage.user);
		if ($scope.usuario.ES_RESCATISTA === 1){
			$location.path('/registrarMascota');	
		}else{
			swal('Privilegios Insuficientes','Usted debe de registrarse como rescatista para registrar a una mascota','error');
		};
		
	};

	//Llama la página de usuarios. 
	$scope.users = function(){
	 	$location.path('/users');
	};

	//Llama la página de mascotas. 
	$scope.pet = function(){
	 	$location.path('/pet');
	};

	//Llama la página del test de recomendación. 
	$scope.testrecomendar = function(){
	 	$location.path('/testrecomendar');
	};

	//Llama la página de lista negra. 
	$scope.listanegra = function(){
	 	$location.path('/listanegra');
	};

	//Llama la página de notifcaciones. 
	$scope.vernotificaciones = function(){
	 	$location.path('/notificaciones');
	};

	//Llama la página de adopciones. 
	$scope.veradopciones = function(){
	 	$location.path('/adopciones');
	};

	//Llama la página del test de adopción. 
	$scope.testadopcion = function(){
	 	$location.path('/testadopcion');
	};	

	//Llama la página para agregar tipos y razas. 
	$scope.agregartr = function(){
	 	$location.path('/agregartr');
	};	
	$scope.facebook = function(){
	 	$location.path('/facebook');
	};	

	//Verifica si el usuario tiene privilegios de administrador. 
	$scope.imAdmin=function(){
		if (JSON.parse(sessionStorage.getItem('user')) != null) { 
			$scope.usuario = JSON.parse(sessionStorage.getItem('user'));
		}
		return ($scope.usuario.ES_ADMINISTRADOR === 1) ? true : false;
	};
	
}]);
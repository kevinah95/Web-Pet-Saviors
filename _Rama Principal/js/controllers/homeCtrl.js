'use strict';

app.controller('homeCtrl', ['$scope','loginService', '$location', function($scope,loginService,$location){
	$scope.logout=function(){
		loginService.logout();
	};
	$scope.verperfil=function(){
		$location.path('/perfil');
	};
	$scope.registrarMascota=function(){
		$location.path('/registrarMascota');
	};
	$scope.users = function(){
	 	$location.path('/users');
	};
	$scope.pet = function(){
	 	$location.path('/pet');
	};
	$scope.testadopcion = function(){
	 	$location.path('/testadoptar');
	};
	$scope.vernotificaciones = function(){
	 	$location.path('/notificaciones');
	};
	$scope.verlistanegra = function(){
	 	$location.path('/listanegra');
	};

}]);

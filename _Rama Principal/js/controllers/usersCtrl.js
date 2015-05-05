'use strict';

app.controller('usersCtrl', ['$scope','$http', '$location', function($scope,$http,usersService,$location){
	
	//Carga la página de usuarios 
	$scope.users=function(){
		$location.path('/users');
	};


	//Verifica si el usuario conectado tiene privilegios de administrador.
	$scope.imAdmin=function(){
		if (JSON.parse(sessionStorage.getItem('user')) != null) { 
			$scope.usuario = JSON.parse(sessionStorage.getItem('user'));
			return ($scope.usuario.ES_ADMINISTRADOR === 1) ? true : false;
		}
		return false;
	};

	//Revisa si es administrador
	$scope.isAdmin=function(pPost){
		return (pPost.Es_Admin === "1") ? true : false;
	};

	//Revisa si está en lista negra. 
	$scope.isInBL=function(pPost){
		return (pPost.Esta_LN === "1") ? true : false;
	};

	//Revisa si el usuario en cuestión es el mismo que está conectado, para que no pueda editarse a sí mismo. 
	$scope.imThisGuy=function(pPost){
		if (JSON.parse(sessionStorage.getItem('user')) != null) { 
			$scope.usuario = JSON.parse(sessionStorage.getItem('user'));
			return ($scope.usuario.CORREOUSUARIO === pPost.Correo) ? true : false;
		}
		return true;
	}

	//pState = 1 si quiero agregar, = 0 si quiero quitar. 
	$scope.manageAdmin=function (pPost, pState){
		$scope.toPHP = {CORREO: pPost.Correo, ESTADO: pState}
		$http.post('data/updateAdmin.php', $scope.toPHP).success(function(data) { });
		swal(  {title:'Cambio realizado'}, function(){history.go(0);} );
	}

	//Función para agregar o quitar gente de la lista negra. 
	$scope.manageBlackList=function (pPost, pState){
		$scope.toPHP = {CORREO: pPost.Correo, ESTADO: pState}
		$http.post('data/updateBL.php', $scope.toPHP).success(function(data) { });
		swal(  {title:'Cambio realizado'}, function(){history.go(0);} );
	}

	//Conecta de forma global y carga todos los usuarios de la base. 
	$http.get('data/connectUserTable.php').success(function(data) { $scope.posts = data; });

}]);

'use strict'

app.controller('listanegraCtrl',function($scope,$location,$http){

	//Carga la ubicación de la página de lista negra. 
	$scope.listanegra = function(){
		$location.path('/listanegra');
	};

	//Carga los datos de la tabla Lista Negra. 
	$scope.cargarlistanegra = function(){
		$http.get('data/conectUserTableLN.php').success(function(data) { $scope.posts = data; });
	};

	//Verifica si el usuario tiene privilegios de administrador. 
	$scope.imAdmin=function(){
		if (JSON.parse(sessionStorage.getItem('user')) != null) { 
			$scope.usuario = JSON.parse(sessionStorage.getItem('user'));
		}
		return ($scope.usuario.ES_ADMINISTRADOR === 1) ? true : false;
	};

	//Verifica si el usuario asociado es el usuario de la base que se muestra. Para validar que no se edite a sí mismo. 
	$scope.imThisGuy=function(pPost){
		if (JSON.parse(sessionStorage.getItem('user')) != null) { 
			$scope.usuario = JSON.parse(sessionStorage.getItem('user'));
			return ($scope.usuario.CORREOUSUARIO === pPost.Correo) ? true : false;
		}
		return true;
	}

	//Envía los parámetros y el cambio realizado al php para cambiar si el usuario pertenece o no a la lista negra. 
	$scope.manageBlackList=function (pPost, pState){
		$scope.toPHP = {CORREO: pPost.Correo, ESTADO: pState}
		$http.post('data/updateBL.php', $scope.toPHP).success(function(data) { });
		swal(  {title:'Cambio realizado'}, function(){history.go(0);} );
	}

	//Devuelve a la página home la localización. 
	$scope.atras = function(){
		$location.path('/home');
	};
});
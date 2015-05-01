'use strict'

app.controller('listanegraCtrl',function($scope,$location,$http){
	$scope.listanegra = function(){
		$location.path('/listanegra');
	};

	$scope.cargarlistanegra = function(){
		$http.get('data/conectUserTableLN.php').success(function(data) { $scope.posts = data; });
	};

	$scope.imAdmin=function(){
		if (JSON.parse(sessionStorage.getItem('user')) != null) { 
			$scope.usuario = JSON.parse(sessionStorage.getItem('user'));
		}
		return ($scope.usuario.ES_ADMINISTRADOR === 1) ? true : false;
	};

	$scope.imThisGuy=function(pPost){
		if (JSON.parse(sessionStorage.getItem('user')) != null) { 
			$scope.usuario = JSON.parse(sessionStorage.getItem('user'));
			return ($scope.usuario.CORREOUSUARIO === pPost.Correo) ? true : false;
		}
		return true;
	}

	$scope.manageBlackList=function (pPost, pState){
		console.log("ALOHA");
		$scope.toPHP = {CORREO: pPost.Correo, ESTADO: pState}
		$http.post('data/updateBL.php', $scope.toPHP).success(function(data) { });
		swal(  {title:'Cambio realizado'}, function(){history.go(0);} );
	}


	$scope.atras = function(){
		$location.path('/home');
	};
});
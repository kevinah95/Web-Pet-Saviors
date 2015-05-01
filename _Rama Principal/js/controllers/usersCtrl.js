'use strict';

app.controller('usersCtrl', ['$scope','$http','usersService', '$location', function($scope,$http,usersService,$location){
	$scope.users=function(){
		$location.path('/users');
	};

	$scope.imAdmin=function(){
		if (JSON.parse(sessionStorage.getItem('user')) != null) { 
			$scope.usuario = JSON.parse(sessionStorage.getItem('user'));
			return ($scope.usuario.ES_ADMINISTRADOR === 1) ? true : false;
		}
		return false;
	};

	$scope.isAdmin=function(pPost){
		return (pPost.Es_Admin === "1") ? true : false;
	};

	$scope.isInBL=function(pPost){
		return (pPost.Esta_LN === "1") ? true : false;
	};

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

	$scope.manageBlackList=function (pPost, pState){
		$scope.toPHP = {CORREO: pPost.Correo, ESTADO: pState}
		$http.post('data/updateBL.php', $scope.toPHP).success(function(data) { });
		swal(  {title:'Cambio realizado'}, function(){history.go(0);} );
	}





	$http.get('data/connectUserTable.php').success(function(data) { $scope.posts = data; });

}]);

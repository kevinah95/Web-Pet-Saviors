'use strict';

app.controller('petCatalogueCtrl', ['$scope','$http','petCatalogueService', '$location',function($scope,$http,petService,$location){
	
	$scope.Iniciar= function() {
		$scope.textToFilter = "";
	}

	$scope.guardarID = function(pID){
		sessionStorage.tempIDMascota = JSON.stringify(pID);
		$location.path('/perfilMascotas');
	};

	$scope.goAdopcion = function(pID) {
		sessionStorage.tempIDMascota = JSON.stringify(pID);
		$location.path('/testadopcion');
	}

	$http.get('data/connectPetTable.php').success(function(data) { $scope.posts = data; });

	$scope.returnID = function(pPost) {
		$scope.User = JSON.parse(sessionStorage.getItem("user"));
		return (pPost.Usuario === $scope.User.CORREOUSUARIO) ? true : false;
	}

	$scope.goEditar = function(pID) {
		sessionStorage.tempIDMascota = JSON.stringify(pID);
		$location.path('/editarMascotas');
	}

	$scope.makeFilter = function() {
		$scope.textToFilter = $scope.User.CORREOUSUARIO;
	}

	$scope.IamAdopter = function(pPost) {
		$scope.User = JSON.parse(sessionStorage.getItem("user"));
		return (pPost.Usuario != $scope.User.CORREOUSUARIO && $scope.User.ES_ADOPTANTE === 1 && pPost.Estado != "ADOPTADO") ? true : false;
	}

}]);

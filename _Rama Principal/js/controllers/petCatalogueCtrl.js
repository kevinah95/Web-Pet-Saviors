'use strict';

app.controller('petCatalogueCtrl', ['$scope','$http', '$location',function($scope,$http,$location){
	
	//Carga el filtro. 
	$scope.Iniciar= function() {
		$scope.textToFilter = "";
	}

	//Guarda el id y los datos de la mascota seleccionada y redirecciona al perfil de mascotas. 
	$scope.guardarID = function(pID){
		sessionStorage.tempIDMascota = JSON.stringify(pID);
		$location.path('/perfilMascotas');
	};

	//Guarda el id y los datos de la mascota seleccionada y redirecciona al test de adopción. 
	$scope.goAdopcion = function(pID) {
		sessionStorage.tempIDMascota = JSON.stringify(pID);
		$location.path('/testadopcion');
	}

	//Carga de forma global todos los registros de mascotas. 
	$http.get('data/connectPetTable.php').success(function(data) { $scope.posts = data; });

	//Retorna el id del usuario logueado. 
	$scope.returnID = function(pPost) {
		$scope.User = JSON.parse(sessionStorage.getItem("user"));
		return (pPost.Usuario === $scope.User.CORREOUSUARIO) ? true : false;
	}

	//Carga la variable temporal con el id de la mascota y llama a editar mascotas. 
	$scope.goEditar = function(pID) {
		sessionStorage.tempIDMascota = JSON.stringify(pID);
		$location.path('/editarMascotas');
	}

	//Setea el filtro para que se muestren solo las mascotas que pertenecen a un usuario. 
	$scope.makeFilter = function() {
		$scope.textToFilter = $scope.User.CORREOUSUARIO;
	}

	//Analiza si el usuario logueado tiene privilegios de adoptante. 
	$scope.IamAdopter = function(pPost) {
		$scope.User = JSON.parse(sessionStorage.getItem("user"));
		return (pPost.Usuario != $scope.User.CORREOUSUARIO && $scope.User.ES_ADOPTANTE === 1 && pPost.Estado != "ADOPTADO") ? true : false;
	}

}]);

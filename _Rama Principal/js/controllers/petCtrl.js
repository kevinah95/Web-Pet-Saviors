'use strict';

app.controller('petCtrl', ['$scope','$http', '$location', function($scope,$http,$location){

	//Llama a la página de mascotas. 
	$scope.pet=function(){
		$location.path('/pet');
	};

	//Llama al catálogo de mascotas. 
	$scope.petCatalogue=function(){
		$location.path('/petCatalogue');
	};

	//Llama al test de adopción con la variable temporal de la mascota. 
	$scope.testadopcion = function(pID){
		sessionStorage.tempIDMascota = JSON.stringify(pID);
		$location.path('/testadopcion');
	};

	//Guarda la variable temporal de la mascotas seleccionada y llama al perfil de mascotas con esos datos. 
	$scope.guardarID = function(pID){
		sessionStorage.tempIDMascota = JSON.stringify(pID);
		$location.path('/perfilMascotas');
	};

	//Llama de forma global los datos de la base de datos de la tabla mascotas. 
	$http.get('data/connectPetTable.php').success(function(data) { $scope.posts = data; });

}]);

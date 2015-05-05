'use strict';

app.controller('resultadotestCtrl', ['$scope','$http', '$location', function($scope,$http,$location){

	//Carga la página de mascotas. 
	$scope.pet=function(){
		$location.path('/pet');
	};

	//Guarda la sesión del usuario que está conectado.
	$scope.guardarID = function(pID){
		sessionStorage.tempIDMascota = JSON.stringify(pID);
		$location.path('/perfilMascotas');
	};

	//Carga de forma global a variable del formulario y carga todas las mascotas. 
	$scope.search = JSON.parse(sessionStorage.getItem('resultadoTest'));
	$http.get('data/connectPetTable.php').success(function(data) { $scope.posts = data; });

}]);

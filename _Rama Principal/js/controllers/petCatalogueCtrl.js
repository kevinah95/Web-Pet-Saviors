'use strict';

app.controller('petCatalogueCtrl', ['$scope','$http','petCatalogueService', '$location', function($scope,$http,petService,$location){
	
	$scope.guardarID = function(pID){
		sessionStorage.tempIDMascota = JSON.stringify(pID);
		$location.path('/perfilMascotas');
	};

	$http.get('data/connectPetTable.php').success(function(data) { $scope.posts = data; });

}]);

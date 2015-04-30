'use strict';

app.controller('petCtrl', ['$scope','$http','petService', '$location', function($scope,$http,petService,$location){
	$scope.pet=function(){
		$location.path('/pet');
	};

	$scope.guardarID = function(pID){
		sessionStorage.tempIDMascota = JSON.stringify(pID);
		$location.path('/perfilMascotas');
	};

	$http.get('data/connectPetTable.php').success(function(data) { $scope.posts = data; });

}]);

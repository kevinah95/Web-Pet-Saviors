'use strict';

app.controller('resultadotestCtrl', ['$scope','$http', '$location', function($scope,$http,$location){
	$scope.pet=function(){
		$location.path('/pet');
	};

	$scope.guardarID = function(pID){
		sessionStorage.tempIDMascota = JSON.stringify(pID);
		$location.path('/perfilMascotas');
	};
	$scope.search = JSON.parse(sessionStorage.getItem('resultadoTest'));
	$http.get('data/connectPetTable.php').success(function(data) { $scope.posts = data; });

}]);

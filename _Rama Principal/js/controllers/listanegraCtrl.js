'use strict'

app.controller('listanegraCtrl',function($scope,$location){
	$scope.listanegra = function(){
		$location.path('/listanegra');
	};

	$scope.cargarlistanegra = function(){
		$http.get('conectUserTableLN.php').success(function(data) { $scope.posts = data; });
		
	};
	$scope.atras = function(){
		$location.path('/home');
	}
});
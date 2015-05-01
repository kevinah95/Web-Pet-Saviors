'use strict'

app.controller('listanegraCtrl',function($scope,$location,$http){
	$scope.listanegra = function(){
		$location.path('/listanegra');
	};

	$scope.cargarlistanegra = function(){
		console.log('Esto no sirve');
		$http.get('data/conectUserTableLN.php').success(function(data) { $scope.posts = data; });
		
	};
	$scope.atras = function(){
		$location.path('/home');
	}
});
'use strict'

app.controller('adopcionesCtrl', function($scope,$location,$http){
	$scope.inicializarTabla = function(){
		$scope.varUser = JSON.parse(sessionStorage.user);
		$http.post('data/conectAdopTable.php',$scope.varUser)
		.success(function(data) { 
		$scope.posts = data; })
		$scope.varImg = JSON.parse(sessionStorage.user);
		$http.post('data/connectFotoTable.php',$scope.varImg)
		.success(function(data) { 
		$scope.posts = data; })
	};
	$scope.obtenerImagenes = function(){
		$scope.varImg = JSON.parse(sessionStorage.user);
		$http.post('data/connectFotoTable.php',$scope.varImg)
		.success(function(data) { 
		$scope.posts = data; })
	};



	$scope.fun = function(){
		return $scope.var1;
	};
	$scope.fun2 = function(){
		if ($scope.var1===true){
			$scope.var1=false;
		}
		else{
			$scope.var1=true;
		}
		$scope.var1=false;
	}
	
});
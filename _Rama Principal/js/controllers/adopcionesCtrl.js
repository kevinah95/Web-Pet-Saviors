'use strict'

app.controller('adopcionesCtrl', function($scope,$location,$http){
	$scope.inicializarTabla = function(){
		$scope.varUser = JSON.parse(sessionStorage.user);
		$http.post('data/conectAdopTable.php',$scope.varUser)
		.success(function(data) { 
		$scope.posts = data; })
		$scope.varImg = $scope.posts.ID_MASCOTA;
		$http.post('data/connectFotoTable.php',$scope.varImg)
		.success(function(data) { 
		$scope.posts = data; })
	};
	$scope.selection = null;
	$scope.funcionParaModal = function(valor){
		$scope.selection=valor;
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
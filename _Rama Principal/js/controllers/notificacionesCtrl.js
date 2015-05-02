'use strict'

app.controller('notificacionesCtrl', function($scope,$location,$http){
	$scope.inicializarNot = function(){
		$scope.varUser = JSON.parse(sessionStorage.user);
	$http.post('data/conectNotifyTable.php',$scope.varUser)
	.success(function(data) { 
		$scope.posts = data; })
	};

	$scope.notificaciones = function(){
		$location.path('/notificaciones');
	};
	$scope.notificaciones = function(){
		$location.path('/home');
	};
	
});
'use strict'

app.controller('notificacionesCtrl', function($scope,$location,$http){
	$scope.inicializarUsuario = function(){
		$scope.varUser = JSON.parse(sessionStorage.user);
	$http.post('data/conectNotifyTable.php',$scope.varUser)
	.success(function(data) { 
		$scope.posts = data; })
	};

	
});
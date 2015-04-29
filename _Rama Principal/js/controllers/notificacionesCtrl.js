'use strict'

app.controller('notificacionesCtrl', function($scope,$location){
	$scope.inicializarUsuario = function(){
		$scope.varUser = JSON.parse(sessionStorage.user);
	$http.post('data/conectNotifyTable.php',$scope.varUser.CORREOUSUARIO)
	.success(function(data) { 
		$scope.posts = data; })
	};

	
});
'use strict'

app.controller('notificacionesCtrl', function($scope,$location){
	$http.post('data/conectNotifyTable.php,',$scope.var.CORREOUSUARIO).success(function(data) { $scope.posts = data; })
	};

	$scope.getUsuario = function('$scope.var = JSON.parse(sessionStorage.user)')
});
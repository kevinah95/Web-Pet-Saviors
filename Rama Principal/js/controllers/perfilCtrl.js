'use strict';

app.controller('perfilCtrl', ['$scope', '$location','$rootScope', function($scope,$location,$rootScope){
	
	$scope.masterUsuario = $rootScope.usuario;
	
}]);

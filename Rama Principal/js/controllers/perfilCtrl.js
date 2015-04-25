'use strict';

app.controller('perfilCtrl', ['$scope', '$location', function($scope,$location){
	

	$scope.inicializar = function() {
    	$scope.masterUsuario=JSON.parse(sessionStorage.user); 
    	// console.log($scope.masterUsuario);
    	
  	};
  	$scope.editarPerfil = function(){
  		$location.path('/editarPerfil');
  	};
  	$scope.volver = function(){
  		$location.path('/home');	
  	};

}]);

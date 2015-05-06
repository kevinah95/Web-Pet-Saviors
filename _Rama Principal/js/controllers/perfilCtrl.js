'use strict';

app.controller('perfilCtrl', ['$scope', '$location', function($scope,$location){
	
    
    //Carga la variable global del usuario logueado. 
    $scope.inicializar = function() {
    	$scope.masterUsuario=JSON.parse(sessionStorage.user); 
  	};

    //Llama la página de editar perfil. 
  	$scope.editarPerfil = function(){
  		$location.path('/editarPerfil');
  	};

    //Llama la página home. 
  	$scope.volver = function(){
  		$location.path('/home');	
  	};

}]);

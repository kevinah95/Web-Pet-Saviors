'use strict';

app.controller('homeCtrl', ['$scope','loginService', '$location', function($scope,loginService,$location){
	$scope.logout=function(){
		loginService.logout();
	};
	$scope.verperfil=function(){
		$location.path('/perfil');
	};

}]);

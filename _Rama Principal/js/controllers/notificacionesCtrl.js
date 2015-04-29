'use strict'

app.controller('inicioCtrl', function($scope,$location){
	$scope.ingresar = function(){
		sessionStorage.setItem("islogged",null);
		$location.path('/notificaciones');
	};
});
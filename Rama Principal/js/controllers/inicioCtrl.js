'use strict';

app.controller('inicioCtrl', function ($scope, inicioService) {
	$scope.ingresar = function(){
		inicioService.ingresar();
		 sessionStorage.setItem("islogged" , null);
	};
	
});
'use strict'
 
app.controller('notificacionesCtrl', function($scope,$location,$http){

	//Carga los datos de la base en la tabla notificaciones. 
	$scope.inicializarNot = function(){
		$scope.varUser = JSON.parse(sessionStorage.user);
		$http.post('data/conectNotifyTable.php',$scope.varUser)
		.success(function(data) { 
		$scope.posts = data; })
	}

	//Guarda el id del usuario conectado. 
	$scope.guardarID = function(pID){
		sessionStorage.tempIDForm = pID;
		$location.path('/resultadoadopcion');
	};

	
});
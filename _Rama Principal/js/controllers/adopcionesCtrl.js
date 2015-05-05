'use strict'

app.controller('adopcionesCtrl', function($scope,$location,$http){
	$scope.inicializarTabla = function(){
		$scope.varUser = JSON.parse(sessionStorage.user);
		$http.post('data/conectAdopTable.php',$scope.varUser)
		.success(function(data) { 
		$scope.posts = data; })
	}
	$scope.guardarID = function(pID){
		sessionStorage.tempIDAdopcion = pID;
		$location.path('/fotosAdopciones');
	}
	$scope.devolver = function(pIDMasc,pDevuelve,pRescata,pMotivo){
		$scope.mensaje = 
                     {
                         IDMASCOTA: pIDMasc,
                         DEVUELVE: pDevuelve,
                         RESCATA: pRescata,
                         MOTIVO: pMotivo
                     };
        console.log($scope.mensaje);
		$http.post('data/devolver.php',$scope.mensaje)
		.success(function(msg){
        console.log(msg);})
	};
});
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
	};
	
});
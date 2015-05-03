'use strict'

app.controller('fotosAdopcionesCtrl', function($scope,$location,$http){
	$scope.inicializar = function() {
    $scope.infoAdopcion = JSON.parse(sessionStorage.tempIDAdopcion);
    $http.post('data/connectFotoTable.php',$scope.infoMascota.IdAdopcion)
    .success(function(data){
    $scope.posts = data})
    
  	};

  $scope.volver = function(){
  		$location.path('/home');	
  	};
});
'use strict'

app.controller('fotosAdopcionesCtrl',['$scope', '$location','$http', function($scope,$location,$http){
	$scope.inicializar = function() {
    $scope.infoAdopcion = JSON.parse(sessionStorage.tempIDAdopcion);
    console.log($scope.infoAdopcion.IdAdopcion);
    $scope.imagen = null;
    $http.post('data/connectFotoTable.php',$scope.infoAdopcion.IdAdopcion)
    .success(function(msg){
    $scope.imagen = msg[0]})
    console.log($scope.imagen);
    
  	};

  $scope.volver = function(){
  		$location.path('/adopciones');	
  	};
}]);
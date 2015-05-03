'use strict'

app.controller('fotosAdopcionesCtrl', function($scope,$location,$http){
  	$scope.inicializar = function() {
        $scope.infoAdopcion = sessionStorage.getItem('tempIDAdopcion');
        console.log($scope.infoAdopcion);
        $http.post('data/connectFotoTable.php',$scope.infoAdopcion)
        .success(function(data){
        $scope.posts = data;})
      	}

    $scope.volver = function(){
    		$location.path('/adopciones');	
    	};
});
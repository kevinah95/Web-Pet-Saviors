'use strict'

app.controller('fotosAdopcionesCtrl', function($scope,$location,$http){
  	$scope.inicializar = function() {
        $scope.infoAdopcion = sessionStorage.getItem('tempIDAdopcion');
        $http.post('data/connectFotoTable.php',$scope.infoAdopcion)
        .success(function(data){
        $scope.posts = data;}) 
      	}

    $scope.volver = function(){
    		$location.path('/adopciones');	
    	}

    $scope.agregar = function(){
        $scope.infoAdopcion = sessionStorage.getItem('tempIDAdopcion');
        $scope.mensaje.idAdop = $scope.infoAdopcion;
        console.log($scope.mensaje.url);
        console.log($scope.mensaje.idAdop);
        $http.post('data/agregarFoto.php',$scope.mensaje)
        .success(function(data){
        $scope.posts = data;})
        $location.path('/fotosAdopciones');
    }

    $scope.eliminar = function(idFoto){
        $http.post('data/eliminarFoto.php',idFoto)
        .success(function(data){
        $scope.posts = data;})
        $location.path('/fotosAdopciones');
    };
});
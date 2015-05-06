'use strict'

app.controller('fotosAdopcionesCtrl', function($scope,$location,$http){

    //Carga la información de la variable temporal de la adopción en cuestión y carga las fotos relacionadas a esa adopción desde la base.
  	$scope.inicializar = function() {
        $scope.infoAdopcion = sessionStorage.getItem('tempIDAdopcion');
        $http.post('data/connectFotoTable.php',$scope.infoAdopcion)
        .success(function(data){
        $scope.posts = data;}) 
      	}

    //Devuelve a la página de mascotas. 
    $scope.volver = function(){
    		$location.path('/adopciones');	
    	}

    //Llama el php de escritura en la tabla de fotos. 
    $scope.agregar = function(){
        $scope.infoAdopcion = sessionStorage.getItem('tempIDAdopcion');
        $scope.mensaje.idAdop = $scope.infoAdopcion;
        $http.post('data/agregarFoto.php',$scope.mensaje)
        .success(function(data){
        $scope.posts = data;})
        $location.path('/adopciones');
    }
    $scope.soyYo = function(){
        $scope.infoAdoptante = sessionStorage.getItem('tempIDAdoptante');
        if (JSON.parse(sessionStorage.getItem('user')) != null){
            $scope.usuario = JSON.parse(sessionStorage.getItem('user'));
            return($scope.usuario.CORREOUSUARIO === $scope.infoAdoptante) ? true : false;
        }
        return true;
    }


    //Llama al php que borra fotos de la base. 
    $scope.eliminar = function(idFoto){
        $http.post('data/eliminarFoto.php',idFoto)
        .success(function(data){
        $scope.posts = data;})
        $location.path('/adopciones');
    };
    
});
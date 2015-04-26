'use strict';

app.controller('registrarmascotaCtrl', ['$scope', '$location', '$http',
    function($scope, $location, $http) {
        
        $scope.inicializar = function() {
            var $promise = $http.post('data/getTipoAnimal.php') //send data to user.php
                .success(function(msg) {

                    // console.log(msg);
                    $scope.tipos = msg;
                    
                    $scope.getRazaAnimal($scope.tipos[0].NOMBRE_TIPO);
                    $scope.tipoSeleccionado = $scope.tipos[0].NOMBRE_TIPO;
                    
                    // $scope.algo = {variable: 'Perro'};
                    // $scope.getRazaAnimal($scope.algo);


                });
        };
        $scope.getRazaAnimal = function(tipoAnimal) {
            $scope.tipoSeleccionado = tipoAnimal;
            var $promise = $http.post('data/getRazaAnimal.php', tipoAnimal); //send data to user.php
            $promise.then(function(msg) {
                $scope.razas = msg.data;
                console.log(tipoAnimal);
                $scope.razaSeleccionada = $scope.razas[0].NOMBRE_RAZA;
                // console.log($scope.razas[0]);
                // console.log(msg);
            });
        };
        $scope.seleccionRaza = function(razaAnimal){
        	$scope.razaSeleccionada = razaAnimal;
        };

        $scope.crear = function(mascota){
            // console.log(mascota);
            var $promise = $http.post('data/crearMascota.php', mascota); //send data to user.php
            $promise.then(function(msg) {
                console.log(msg);
            });
        };


    }
]);
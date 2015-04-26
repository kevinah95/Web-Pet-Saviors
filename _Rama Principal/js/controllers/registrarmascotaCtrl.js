'use strict';

app.controller('registrarmascotaCtrl', ['$scope', '$location', '$http',
    function($scope, $location, $http) {
        
        $scope.inicializar = function() {
            var $promise = $http.post('data/getTipoAnimal.php') //send data to user.php
                .success(function(msg) {
                    $scope.masterUsuario=JSON.parse(sessionStorage.user);

                    // console.log(msg);
                    $scope.tipos = msg;
                    $scope.newMascota = {
                        raza: 'raza',
                        tipo: 'tipo',
                        duenio: $scope.masterUsuario.CORREOUSUARIO
                    };
                    
                    $scope.getRazaAnimal($scope.tipos[0].NOMBRE_TIPO);
                    $scope.newMascota.tipo = $scope.tipos[0].NOMBRE_TIPO;
                    // console.log($scope.newMascota.duenio);
                    // $scope.algo = {variable: 'Perro'};
                    // $scope.getRazaAnimal($scope.algo);


                });
        };
        $scope.getRazaAnimal = function(tipoAnimal) {
            $scope.newMascota.tipo = tipoAnimal;
            var $promise = $http.post('data/getRazaAnimal.php', tipoAnimal); //send data to user.php
            $promise.then(function(msg) {
                $scope.razas = msg.data;
                // console.log(tipoAnimal);
                $scope.newMascota.raza = $scope.razas[0].NOMBRE_RAZA;
                // console.log($scope.razas[0]);
                // console.log(msg);
            });
        };
        $scope.seleccionRaza = function(razaAnimal){
        	$scope.newMascota.raza = razaAnimal;
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
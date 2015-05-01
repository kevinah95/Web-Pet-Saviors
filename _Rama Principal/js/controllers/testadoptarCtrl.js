'use strict'
app.controller('testadoptarCtrl', ['$scope', '$http',
    function($scope, $http) {
        $scope.inicializar = function() {
            $scope.preguntas = null;
            $scope.respuestas = null;
            $scope.indice = 1;
            $scope.deshabilitarAtras = 1;
            $scope.seleccionadas = [];
            $scope.seleccion = "No importa";
            $scope.deshabilitarTR = false;
            $http.get("data/getFAdopcionPreguntas.php")
                .success(function(msg) {
                    $scope.preguntas = msg;
                    $scope.seleccionadas = new Array($scope.preguntas.length);
                    console.log($scope.seleccionadas.length);
                });
            $http.get("data/getFAdopcionRespuestas.php")
                .success(function(msg) {
                    $scope.respuestas = msg;

                });
            // ----------Tipo
            var $promise = $http.post('data/getTipoAnimal.php') //send data to user.php
                .success(function(msg) {
                    

                    $scope.tipos = msg;
                    $scope.MascotaTipoRaza = {
                        raza: 'raza',
                        tipo: 'tipo',
                    };
                    $scope.getRazaAnimal($scope.tipos[0].NOMBRE_TIPO);
                    $scope.MascotaTipoRaza.tipo = $scope.tipos[0].NOMBRE_TIPO;
                });


        };

        // Razas
        $scope.getRazaAnimal = function(tipoAnimal) {
            $scope.MascotaTipoRaza.tipo = tipoAnimal;
            var $promise = $http.post('data/getRazaAnimal.php', tipoAnimal); //send data to user.php
            $promise.then(function(msg) {
                $scope.razas = msg.data;
                $scope.MascotaTipoRaza.raza = $scope.razas[0].NOMBRE_RAZA;
            });
        };

        $scope.seleccionRaza = function(razaAnimal) {
            $scope.MascotaTipoRaza.raza = razaAnimal;
        };


        $scope.atras = function() {
            if ($scope.indice != 0) {
                $scope.indice -= 1;
                $scope.deshabilitarSiguiente = false;
            };
            $scope.deshabilitarAtras = ($scope.indice === 1) ? true : false;
            $scope.seleccion = $scope.seleccionadas[$scope.indice];
        };

        $scope.siguiente = function() {
            $scope.seleccionadas[$scope.indice] = $scope.seleccion;
            if ($scope.indice != $scope.preguntas.length) {
                $scope.indice += 1;
                $scope.deshabilitarAtras = false;

            };
            
            if ($scope.indice === $scope.preguntas.length) {
                if($scope.deshabilitarTR === false){
                    $scope.seleccionadas.tipo = $scope.MascotaTipoRaza.tipo;
                    $scope.seleccionadas.raza = $scope.MascotaTipoRaza.raza;
                }
            };
            $scope.seleccion = $scope.seleccionadas[$scope.indice];
            // $scope.deshabilitarSiguiente = ($scope.indice === $scope.preguntas.length) ? true : false;
            // $scope.appendRespuestas($scope.seleccion);


        };

        $scope.preguntasArrayFiltro = function(item) {
            // console.log(item);
            return (item.ID_PREGUNTAS == $scope.indice);
        };

        $scope.respuestasArrayFiltro = function(item) {
            // console.log(item);
            return (item.ID_PREGUNTAS == $scope.indice);
        };

        


    }
]);
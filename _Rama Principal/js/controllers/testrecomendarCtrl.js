'use strict'
app.controller('testrecomendarCtrl', ['$scope', '$http', '$location',
    function($scope, $http, $location) {
        $scope.inicializar = function() {
            $scope.preguntas = null;
            $scope.respuestas = null;
            $scope.indice = 1;
            $scope.deshabilitarAtras = 1;
            $scope.seleccionadas = {
                Tamano: '',
                Energia: '',
                Pelaje: '',
                Color: '',
                Entrenamiento: '',
                Espacio: '',
                Severidad: '',
                Tipo: '',
                Raza: ''
            };
            $scope.seleccion = "No importa";
            $scope.deshabilitarTR = false;
            $http.get("data/getFRecomendarPreguntas.php")
                .success(function(msg) {
                    $scope.preguntas = msg;
                    // $scope.seleccionadas = new Array($scope.preguntas.length);
                    // console.log($scope.seleccionadas.length);
                });
            $http.get("data/getFRecomendarRespuestas.php")
                .success(function(msg) {
                    $scope.respuestas = msg;

                });
            // ----------Tipo
            var $promise = $http.post('data/getTipoAnimal.php') //send data to user.php
                .success(function(msg) {


                    $scope.tipos = msg;
                    $scope.MascotaTipoRaza = {
                        raza: 'raza',
                        tipo: 'tipo'
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
            $scope.seleccion = 'No importa';
        };

        $scope.siguiente = function() {
            if ($scope.seleccion != 'No importa') {

                switch ($scope.indice) {
                    case 1:
                        $scope.seleccionadas.Tamano = $scope.seleccion;
                        break;
                    case 2:
                        $scope.seleccionadas.Energia = $scope.seleccion;
                        break;
                    case 3:
                        $scope.seleccionadas.Pelaje = $scope.seleccion;
                        break;
                    case 4:
                        $scope.seleccionadas.Color = $scope.seleccion;
                        break;
                    case 5:
                        $scope.seleccionadas.Entrenamiento = $scope.seleccion;
                        break;
                    case 6:
                        $scope.seleccionadas.Espacio = $scope.seleccion;
                        break;
                    case 7:
                        $scope.seleccionadas.Severidad = $scope.seleccion;
                        break;
                    default:
                        break;
                }
            }
            if ($scope.indice != $scope.preguntas.length) {
                $scope.indice += 1;
                $scope.deshabilitarAtras = false;

            };

            if ($scope.indice === $scope.preguntas.length) {
                if ($scope.deshabilitarTR === false) {
                    $scope.seleccionadas.Tipo = $scope.MascotaTipoRaza.tipo;
                    $scope.seleccionadas.Raza = $scope.MascotaTipoRaza.raza;

                }
                console.log($scope.seleccionadas);
                console.log(JSON.stringify($scope.seleccionadas));
                sessionStorage.resultadoTest = JSON.stringify($scope.seleccionadas);
                $location.path('/resultadoTest');
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
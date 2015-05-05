'use strict'
app.controller('testrecomendarCtrl', ['$scope', '$http', '$location',
    function($scope, $http, $location) {

        //Carga todos los literales con strings vacíos y 
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
                    
                });
            $http.get("data/getFRecomendarRespuestas.php")
                .success(function(msg) {
                    $scope.respuestas = msg;

                });

            // En esta parte se manejan los tipos. 
            var $promise = $http.post('data/getTipoAnimal.php') 
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

        // Se manejan las razas
        $scope.getRazaAnimal = function(tipoAnimal) {
            $scope.MascotaTipoRaza.tipo = tipoAnimal;
            var $promise = $http.post('data/getRazaAnimal.php', tipoAnimal);
            $promise.then(function(msg) {
                $scope.razas = msg.data;
                $scope.MascotaTipoRaza.raza = $scope.razas[0].NOMBRE_RAZA;
            });
        };

        // Se carga la variable de mascota. 
        $scope.seleccionRaza = function(razaAnimal) {
            $scope.MascotaTipoRaza.raza = razaAnimal;
        };


        //Regresa a la pregunta anterior mientras exista. 
        $scope.atras = function() {
            if ($scope.indice != 0) {
                $scope.indice -= 1;
                $scope.deshabilitarSiguiente = false;
            };
            $scope.deshabilitarAtras = ($scope.indice === 1) ? true : false;
            $scope.seleccion = 'No importa';
        };

        //Avanza a la siguiente pregunta 
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

        };

        //Se usa para verificar si la pregunta ya fue agregada al arreglo.
        $scope.preguntasArrayFiltro = function(item) {
            return (item.ID_PREGUNTAS == $scope.indice);
        };

        //Se usa para verificar si la respuesta ya fue agregada al arreglo. 
        $scope.respuestasArrayFiltro = function(item) {
            return (item.ID_PREGUNTAS == $scope.indice);
        };
        
    }
]);
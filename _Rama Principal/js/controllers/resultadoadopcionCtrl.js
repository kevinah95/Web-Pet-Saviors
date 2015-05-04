'use strict'
app.controller('resultadoadopcionCtrl', ['$scope', '$http', '$location',
    function($scope, $http, $location) {
        $scope.inicializar = function() {

            $http.get("data/getFAdopcionPreguntas.php")
                .success(function(msg) {
                    $scope.preguntas = msg;
                });

            $scope.id_form = sessionStorage.getItem('tempIDForm');
            $scope.aceptarAdopcion = {};
            $scope.encapsulada();

        };

        $scope.encapsulada = function() {

            var $promise = $http.post('data/resultadoAdopcion.php', $scope.id_form); //send data to user.php
            $promise.then(function(msg) {

                for (var i = 0; i < msg.data.length; i++) {
                    $scope.preguntas[i].respuesta = msg.data[i].CONT_REPUESTA;
                };

                $scope.aceptarAdopcion.CORREOUSUARIO_OLD = msg.data[0].CORREO_RESPONDE;
                $scope.aceptarAdopcion.CORREOUSUARIO_NEW = msg.data[0].CORREO_PREGUNTA;
                $scope.aceptarAdopcion.ID_MASCOTA = parseInt(msg.data[0].ID_MASC, 10);
                $scope.aceptarAdopcion.COMENTARIO = 'solicitud de adopción';

            });
        };
        $scope.aceptar = function() {
            var $promise = $http.post('data/adoptar.php', $scope.aceptarAdopcion); //send data to user.php
            $promise.then(function(msg) {

                if (msg.data === 'Correcto') {
                    swal('Solicitud Aceptada', 'Su mascota cuenta con un nuevo hogar', 'success');
                    $location.path('/home');
                } else {
                    swal('Error','hubo un problema en aceptar la solicitud','error');
                }
            });
        };
        $scope.atras = function() {
            $location.path('/notificaciones');
        };
    }
]);
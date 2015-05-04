'use strict'
app.controller('resultadoadopcionCtrl', ['$scope', '$http', '$location',
    function($scope, $http, $location) {
        $scope.inicializar = function() {

            $http.get("data/getFAdopcionPreguntas.php")
            .success(function(msg) {
               $scope.preguntas = msg;
            });

            $scope.id_form = sessionStorage.getItem('tempIDForm');
            var $promise = $http.post('data/resultadoAdopcion.php', $scope.id_form); //send data to user.php
            $promise.then(function(msg) {
                
                for (var i = 0; i < msg.data.length; i++) {
                    $scope.preguntas[i].respuesta = msg.data[i].CONT_REPUESTA;    
                };
                
            });

        };
        $scope.aceptar = function(){
        	console.log('Aquí va aceptar solicitud');
        };
        $scope.atras = function(){
            $location.path('/notificaciones');
        };
    }
]);
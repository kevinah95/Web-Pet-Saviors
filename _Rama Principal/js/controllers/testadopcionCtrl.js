'use strict'
app.controller('testadopcionCtrl', ['$scope', '$http', '$location',
    function($scope, $http, $location) {
        $scope.inicializar = function() {

            $http.get("data/getFAdopcionPreguntas.php")
            .success(function(msg) {
               $scope.preguntas = msg;
               $scope.respuestas = new Array($scope.preguntas.length);
            });

        };
        $scope.enviar = function(){
        	for (var i = 0; i < $scope.preguntas.length; i++) {
        		$scope.preguntas[i].RESPUESTA = $scope.respuestas[i];
        	};

        	console.log($scope.preguntas);
        };
    }
]);
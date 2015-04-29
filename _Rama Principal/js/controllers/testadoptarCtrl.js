'use strict'
app.controller('testadoptarCtrl', ['$scope', '$http',
    function($scope, $http) {
        $scope.inicializar = function() {
            $scope.preguntas = null;
            $scope.respuestas = null;
            $scope.indice = 1;
            $scope.deshabilitarAtras = 1;
            $scope.seleccionadas = [];
            $http.get("data/getFAdopcionPreguntas.php")
                .success(function(msg) {
                    $scope.preguntas = msg;
                    
                });
            $http.get("data/getFAdopcionRespuestas.php")
                .success(function(msg) {
                    $scope.respuestas = msg;
                    
                });
            

        };

        $scope.atras = function(){
        	if($scope.indice != 0){
        		$scope.indice -= 1;
        		$scope.deshabilitarSiguiente = false;
        	};
        	$scope.deshabilitarAtras = ($scope.indice === 1) ? true : false;
        };

        $scope.siguiente = function(){
        	if ($scope.indice != $scope.preguntas.length){
        		$scope.indice += 1;
        		$scope.deshabilitarAtras = false;
        	}; 
        	$scope.deshabilitarSiguiente = ($scope.indice === $scope.preguntas.length) ? true : false;
        	$scope.appendRespuestas();
        };

        $scope.preguntasArrayFiltro = function(item) {
            // console.log(item);
            return (item.ID_PREGUNTAS == $scope.indice);
        };

        $scope.respuestasArrayFiltro = function(item) {
            // console.log(item);
            return (item.ID_PREGUNTA == $scope.indice);
        };

        $scope.appendRespuestas = function(){
        	var objeto = {color:'azul'};
        	$scope.seleccionadas.push(objeto);
        	console.log($scope.seleccionadas);
        }


    }
]);
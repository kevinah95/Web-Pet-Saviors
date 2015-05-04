'use strict'
app.controller('resultadoadopcionCtrl', ['$scope', '$http', '$location',
    function($scope, $http, $location) {
        $scope.inicializar = function() {

            $http.get("data/getFAdopcionPreguntas.php")
            .success(function(msg) {
               $scope.preguntas = msg;
               $scope.respuestas = new Array($scope.preguntas.length);
            });

        };
        $scope.enviar = function(){

        	$scope.IDmascota = JSON.parse(sessionStorage.getItem('tempIDMascota')).ID;
        	$scope.duenio = JSON.parse(sessionStorage.getItem('tempIDMascota')).Usuario;
        	$scope.solicitante = JSON.parse(sessionStorage.getItem('user')).CORREOUSUARIO;
        	for (var i = 0; i < $scope.preguntas.length; i++) {
        		$scope.preguntas[i].RESPUESTA = $scope.respuestas[i];
        		$scope.preguntas[i].DUENIO = $scope.duenio;
        		$scope.preguntas[i].SOLICITANTE = $scope.solicitante;
        		$scope.preguntas[i].IDMASCOTA = $scope.IDmascota;
        	};
        	
        	var $promise = $http.post('data/setRespuestasTAdopcion.php', $scope.preguntas); 
            $promise.then(function(msg) {
            	console.log(msg);
                if(msg.data === 'Enviada'){
                	console.log('dasdasd');
                	swal('Información Correcta','La solicitud ha sido enviada','success');
                	$location.path('/home');	
                }
                
            });


        	
        	
        };
    }
]);
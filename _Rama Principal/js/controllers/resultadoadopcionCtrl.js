'use strict'
app.controller('resultadoadopcionCtrl', ['$scope', '$http', '$location',
    function($scope, $http, $location) {


        //Carga la variable del usuario logueado y la variable temporal del formulario. 
        $scope.inicializar = function() {

            $http.get("data/getFAdopcionPreguntas.php")
                .success(function(msg) {
                    $scope.preguntas = msg;
                });

            $scope.id_form = sessionStorage.getItem('tempIDForm');
            $scope.aceptarAdopcion = {};
            $scope.arrayCalificaciones = {};
            $scope.encapsulada();

        };

        //Asigna a la variable preguntas sus respectivas respuestas. 
        $scope.encapsulada = function() {

            var $promise = $http.post('data/resultadoAdopcion.php', $scope.id_form); 
            $promise.then(function(msg) {

                for (var i = 0; i < msg.data.length; i++) {
                    $scope.preguntas[i].respuesta = msg.data[i].CONT_RESPUESTA;
                };

                $scope.aceptarAdopcion.CORREOUSUARIO_OLD = msg.data[0].CORREO_RESPONDE;
                $scope.arrayCalificaciones.CorreoCalificador = msg.data[0].CORREO_RESPONDE;
                $scope.aceptarAdopcion.CORREOUSUARIO_NEW = msg.data[0].CORREO_PREGUNTA;
                $scope.arrayCalificaciones.CorreoUsuario = msg.data[0].CORREO_PREGUNTA;
                $scope.aceptarAdopcion.ID_MASCOTA = parseInt(msg.data[0].ID_MASCOTA, 10);
                $scope.aceptarAdopcion.COMENTARIO = 'Solicitud de adopción';

            });
        };

        //Llama al php que escribe en la tabla adopciones con los datos de la solicitud cargada. 
        $scope.aceptar = function() {
            var $promise = $http.post('data/adoptar.php', $scope.aceptarAdopcion); 
            $promise.then(function(msg) {

                if (msg.data === 'Correcto') {
                    swal({title: 'Solicitud Aceptada', type: 'success'}, function(){
                        var fondo = document.getElementById("colorBack");
                        var dialog = document.getElementById("dialogBox");
                        fondo.style.display = "block";
                        dialog.style.display = "block";

                        var winWidth = window.innerWidth;
                        var winHeight = window.innerHeight;

                        dialog.style.left = (winWidth/2) - 480/2 + "px";
                        dialog.style.top = (winHeight/2) - 150 + "px";
                    });
                } else {
                    swal('Error','hubo un problema en aceptar la solicitud','error');
                }
            });
        };

        //Registra la calificación asignada al usuario en la tabla calificaciones ccon php. 
        $scope.subirCalificacion = function(pCalificacion, pMotivo) {
            $scope.arrayCalificaciones.Calificacion = pCalificacion;
            $scope.arrayCalificaciones.Motivo = pMotivo;
            var $promise = $http.post('data/calificarUsuario.php', $scope.arrayCalificaciones);
            $promise.then(function(msg) {
                if (msg.data === 'Correcto') {
                    swal('Calificación subida','Su calificacíón ha sido subida correctamente, gracias','success');
                    $location.path('/home');
                }
                else {
                    swal('Error','Hubo un problema al subir su calificacíón, lo sentimos','error');
                    $location.path('/home');
                }
            });
        };

        //Devuelve a la ventana home. 
        $scope.cancelarCalificacion = function() {
            $location.path('/home');
        }

        //Se devuelve a la página de notifcaciones. 
        $scope.atras = function() {
            $location.path('/notificaciones');
        };
    }
]);
'use strict';
app.factory('editarperfilService', function($http, $location, masterService) {
    return {
        datosModificados: function(scope) {

            var $promise = $http.post('data/actualizarUsuario.php', scope.editadoUsuario); //send data to user.php
            $promise.then(function(msg) {
                if (msg.data === 'Error') {
                    swal("Información Incorrecta", "Hubo un error en la actualización", "error");
                } else {
                    
                    scope.user = { mail: scope.editadoUsuario.CORREOUSUARIO};
                    var $promise = $http.post('data/getUsuarioInfo.php', scope.user) //send data to user.php
                        .success(function(msg) {
                            
                            scope.masterUsuario = msg[0];
                            console.log(msg);
                            // swal("Información",  scope.masterUsuario.NOMBRE, "success");
                            sessionStorage.user = JSON.stringify(scope.masterUsuario);
                            swal("Usuario Actualizado", "Datos Actualizados", "success");


                        });
                    $location.path('/perfil');
                };
                console.log(msg.data + "   " + msg);

            });
        },
        datosIguales: function() {
            
            swal("No se realizaron modificaciones a su cuenta");
            $location.path('/home');
        },





    }

});
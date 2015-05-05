'use strict';
app.factory('editarperfilService', function($http, $location, masterService) {
    return {

        //Llama al php que se encarga de editar en la base. 
        datosModificados: function(scope) {

            var $promise = $http.post('data/actualizarUsuario.php', scope.editadoUsuario);
            $promise.then(function(msg) {
                if (msg.data === 'Error') {
                    swal("Información Incorrecta", "Hubo un error en la actualización", "error");
                } else {
                    
                    scope.user = { mail: scope.editadoUsuario.CORREOUSUARIO};
                    var $promise = $http.post('data/getUsuarioInfo.php', scope.user) 
                        .success(function(msg) {
                            
                            scope.masterUsuario = msg[0];
                            console.log(msg);
                            sessionStorage.user = JSON.stringify(scope.masterUsuario);
                            swal("Usuario Actualizado", "Datos Actualizados", "success");


                        });
                    
                    $location.path('/perfil');

                };
                console.log(msg.data + "   " + msg);

            });
        },
        
        //Devuelve un mensaje de error cuando se detectaron datos iguales. 
        datosIguales: function() {
            
            swal("No se realizaron modificaciones a su cuenta");
            $location.path('/home');
        },





    }

});
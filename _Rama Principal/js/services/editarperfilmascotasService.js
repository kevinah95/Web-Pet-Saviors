'use strict';
app.factory('editarperfilmascotasService', function($http, $location) {
    return {
        datosModificados: function(scope) {

            var $promise = $http.post('data/actualizarMascota.php', scope.editadoMascota); //send data to user.php
            $promise.then(function(msg) {
                //console.log(msg.data);
                if (msg.data === 'Correcto') {
                    swal("Mascota Actualizada", "Datos Actualizados", "success");
                    $location.path('/pet');
                } else {
                    swal("Información Incorrecta", "Hubo un error en la actualización", "error");
                };
            });
        },
        datosIguales: function() {
            swal("No se realizaron modificaciones a su cuenta");
            $location.path('/pet');
        },
    }

});
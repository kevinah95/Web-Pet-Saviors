'use strict';
app.factory('editarperfilmascotasService', function($http, $location) {
    return {
        //Llama al php que se encarga de editar en la base. 
        datosModificados: function(scope) {

            var $promise = $http.post('data/actualizarMascota.php', scope.editadoMascota); 
            $promise.then(function(msg) {
                if (msg.data === 'Correcto') {
                    swal("Mascota Actualizada", "Datos Actualizados", "success");
                    $location.path('/pet');
                } else {
                    swal("Información Incorrecta", "Hubo un error en la actualización", "error");
                };
            });
        },

        //Devuelve un mensaje de error cuando se detectaron datos iguales. 
        datosIguales: function() {
            swal("No se realizaron modificaciones a su cuenta");
            $location.path('/pet');
        },
    }

});
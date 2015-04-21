'use strict';
app.factory('masterService', function($http) {
    return {
        getUsuarioInfo: function(data,scope) {
            var $promise = $http.post('data/getUsuarioInfo.php', data) //send data to user.php
            .success(function(msg) {
			scope.masterUsuario = msg[0];
			console.log(scope.masterUsuario.NOMBRE);
			swal("Información", scope.masterUsuario.NOMBRE, "success");
		});

           
        }




    }

});
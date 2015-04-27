'use strict';
app.factory('masterService', function($http,$cookies) {
    return {
        
        getUsuarioInfo: function(data,scope) {
            var $promise = $http.post('data/getUsuarioInfo.php', data) //send data to user.php
            .success(function(msg) {
            scope.masterUsuario = null;    
			scope.masterUsuario = msg[0];
			// console.log(msg);
			// swal("Información",  scope.masterUsuario.NOMBRE, "success");
            sessionStorage.user = JSON.stringify(scope.masterUsuario);
            
            
            
		});

           
        }


        


    }

});
'use strict';
app.factory('masterService', function($http,$cookies) {
    return {
        //Devuelve la información del usuario. 
        getUsuarioInfo: function(data,scope) {
            var $promise = $http.post('data/getUsuarioInfo.php', data)
            .success(function(msg) {
            scope.masterUsuario = null;    
			scope.masterUsuario = msg[0];
			sessionStorage.user = JSON.stringify(scope.masterUsuario);
                        
		});
  
        }
    }
});
'use strict';
app.factory('registroService',function($http, $location){
	return{
		crear:function(data,scope){
			var $promise=$http.post('data/crearUsuario.php',data); //send data to user.php
			$promise.then(function(msg){
				if (msg.data === 'Error'){
					swal("Información Incorrecta", "Su correo de usuario ya pertenece a uno de nuestros usuarios", "error");
				}else{
					swal("Usuario Registrado", "Gracias por registrarse en PetSaviors, ahora puede ingresar con su correo y contraseña al sistema", "success");
					scope.newUsuario = {};
					scope.formRegistro.$setPristine();
				};

			});

		}
		
	}
		

	
});
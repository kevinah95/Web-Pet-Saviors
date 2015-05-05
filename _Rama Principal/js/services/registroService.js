'use strict';
app.factory('registroService',function($http, $location){
	return{

		//Llama al php que inserta un nuevo usuario en la tabla de la base. 
		crear:function(data,scope){
			var $promise=$http.post('data/crearUsuario.php',data);
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
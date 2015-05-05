'use strict';
app.factory('loginService',function($http, $location, sessionService, masterService){
	return{

		//Llama a la función de verificación 
		login:function(data,scope){
			var $promise=$http.post('data/verificarUsuario.php',data); 
			$promise.then(function(msg){
				var uid=msg.data;
				if(uid){
					sessionStorage.setItem("islogged" , true);
					masterService.getUsuarioInfo(data,scope);
					$location.path('/home');

				}	       
				else  {
					swal("Información Incorrecta", "Su correo de usuario o contraseña no coinciden con nuestros clientes", "error");
					$location.path('/login');
				}				   
			});
		},

		//Destruye la variable que valida si el usuario está logueado y devuelve a la página de inicio. 
		logout:function(){
			sessionService.destroy('user');
			sessionService.destroy('islogged');
			$location.path('/inicio');
		},

		//Booleano que valida si hay un usuario logueado. 
		islogged: function(){
			var logeado = sessionStorage.getItem("islogged"); 

			return (logeado === null || logeado === "null") ? false : true;
			
		}

		
		

	}

});
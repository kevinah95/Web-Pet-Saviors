'use strict';
app.factory('loginService',function($http, $location, sessionService, masterService){
	return{
		login:function(data,scope){
			var $promise=$http.post('data/verificarUsuario.php',data); //send data to user.php
			$promise.then(function(msg){
				var uid=msg.data;
				if(uid){
					//scope.msgtxt='Correct information';
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
		logout:function(){
			sessionService.destroy('user');
			sessionService.destroy('islogged');
			$location.path('/inicio');
		},
		islogged: function(){
			var logeado = sessionStorage.getItem("islogged"); 

			return (logeado === null || logeado === "null") ? false : true;
			
		}

		
		

	}

});
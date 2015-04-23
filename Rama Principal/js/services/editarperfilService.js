'use strict';
app.factory('editarperfilService',function($http, $location){
	return{
		datosModificados:function(scope){
			// var $promise=$http.post('data/verificarUsuario.php',data); //send data to user.php
			// $promise.then(function(msg){
			// 	var uid=msg.data;
			// 	if(uid){
			// 		//scope.msgtxt='Correct information';
			// 		sessionStorage.setItem("islogged" , true);
			// 		masterService.getUsuarioInfo(data,scope);
			// 		$location.path('/home');

			// 	}	       
			// 	else  {
			// 		swal("Información Incorrecta", "Su correo de usuario o contraseña no coinciden con nuestros clientes", "error");
			// 		$location.path('/login');
			// 	}				   
			// });
			var $promise=$http.post('data/actualizarUsuario.php',scope.editadoUsuario); //send data to user.php
			$promise.then(function(msg){
				if (msg.data === 'Error'){
					swal("Información Incorrecta", "Hubo un error en la actualización", "error");
				}else{
					swal("Usuario Actualizado", "Datos Actualizados", "success");
					// scope.newUsuario = {};
					// scope.formRegistro.$setPristine();
				};
				console.log(msg.data + "   "+ msg);

			});
		},
		datosIguales:function(){
			// sessionService.destroy('user');
			// sessionService.destroy('islogged');
			// 
			swal("No se realizaron modificaciones a su cuenta");
			$location.path('/home');
		}

		
		

	}

});
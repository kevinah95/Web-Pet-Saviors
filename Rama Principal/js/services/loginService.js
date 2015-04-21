'use strict';
app.factory('loginService',function($http, $location, sessionService, masterService){
	return{
		login:function(data,scope){
			var $promise=$http.post('data/verificarUsuario.php',data); //send data to user.php
			$promise.then(function(msg){
				var uid=msg.data;
				if(uid){
					//scope.msgtxt='Correct information';
					sessionService.set('uid',uid);
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
			sessionService.destroy('uid');
			$location.path('/login');
		},
		islogged:function(){
			var $checkSessionServer=$http.post('data/check_session.php');
			return $checkSessionServer;
			/*
			if(sessionService.get('user')) return true;
			else return false;
			*/
		}

		
		

	}

});
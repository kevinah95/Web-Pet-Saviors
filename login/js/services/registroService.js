'use strict';
app.factory('registroService',function($http, $location){
	return{
		crear:function(data,scope){
			var $promise=$http.post('data/newUsuario.php',data); //send data to user.php
			$promise.then(function(msg){
				console.log(msg.data);
			});

		}
		
	}
		

	
});
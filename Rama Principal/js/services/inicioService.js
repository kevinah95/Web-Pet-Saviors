'use strict';
app.factory('inicioService',function($http, $location){
	return{
		ingresar:function(scope){
			$location.path('/login');

		}
		
	}
		

	
});
'use strict';

app.factory('sessionService',['$http',function($http){
	return{

		//Setea la variable sesión. 
		set:function(key,value){
			return sessionStorage.setItem(key,value);
		},
		//Devuelve la variable sesión. 
		get:function(key){
			return sessionStorage.getItem(key);
		},

		//Destruye la variable sesión. 
		destroy:function(key){
			return sessionStorage.removeItem(key);
		}
	}
}])
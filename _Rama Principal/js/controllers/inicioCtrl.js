'use strict';

app.controller('inicioCtrl', function ($scope, $location) {
	
	// Valida que que el usuario tenga datos válidos y si no devuelve a la página de log in. 
	$scope.ingresar = function(){
		$scope.validar = sessionStorage.getItem("islogged");
		if ($scope.validar != null || $scope.validar != "null"){
			$location.path('/home');
		}else{
			$location.path('/login');	
		}
		
		 
	};

	// Anima el Parallax para el efecto de doble fondo. 
	$scope.animar = function(){
		$(document).ready(function(){
		   $window = $(window);
		 
		   $('section[data-type="background"]').each(function(){
		     var $scroll = $(this);
		                     
		      $(window).scroll(function() {
		        var yPos = -($window.scrollTop() / $scroll.data('speed'));
		         
		        var coords = '50% '+ yPos + 'px';
		 
		        $scroll.css({ backgroundPosition: coords });   
		      }); 
		   });  
		}); 

		document.createElement("section");
	};
	
});
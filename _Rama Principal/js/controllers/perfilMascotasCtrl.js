'use strict';

app.controller('perfilMascotasCtrl', ['$scope', '$location','$window', function($scope,$location,$window){
	

	$scope.inicializar = function() {
    	$scope.masterUsuario=JSON.parse(sessionStorage.user); 
    	// console.log($scope.masterUsuario);
    	
  	};

  $scope.editarPerfil = function(){
  		$location.path('/editarPerfil');
  	};

  $scope.volver = function(){
  		$location.path('/home');	
  	};
  $scope.animacion = function(){
    $("#SecondPanel").hide();

    var changeFlag = true;
    $("#btnSalud").click(function(){
        if(changeFlag) {
            $("#btnSalud").text("Ocultar Salud");
            $("#firstPanel").animate({
                marginLeft: '0px'
            }, 'slow');
            $("#SecondPanel").show('slow');
            changeFlag = false;
        }
        else {
            $("#btnSalud").text("Mostrar Salud");
            $("#firstPanel").animate({
                marginLeft: '18%'
            }, 'slow');
            $("#SecondPanel").hide('slow');
            changeFlag = true;
        }
    })
  };
}]);
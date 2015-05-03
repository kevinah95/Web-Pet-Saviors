'use strict';

app.controller('perfilMascotasCtrl', ['$scope', '$location','$http', function($scope,$location,$http){
	

	$scope.inicializar = function() {
    $scope.infoMascota = JSON.parse(sessionStorage.tempIDMascota);
    $scope.infoSalud = null;
    $http.post('data/getSaludMascotas.php',$scope.infoMascota.IDSalud).success(function(msg) { $scope.infoSalud = msg[0]})
    
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
  
  $scope.editarPerfil = function(){
  		$location.path('/editarMascotas');
  	};

  $scope.volver = function(){
  		$location.path('/home');	
  	};
}]);
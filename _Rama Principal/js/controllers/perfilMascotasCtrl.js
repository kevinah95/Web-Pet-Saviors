'use strict';

app.controller('perfilMascotasCtrl', ['$scope', '$location','$http', function($scope,$location,$http){
	

  //Carga el estado de salud y los datos de la variable temporal de la mascota seleccionada, así como el jQuery. 
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
  
  //Llama editar Mascotas. 
  $scope.editarPerfil = function(){
  		$location.path('/editarMascotas');
  	};


  //Se devuelve a la página de Mascotas. 
  $scope.volver = function(){
  		$location.path('/pet');	
  	};

    
}]);
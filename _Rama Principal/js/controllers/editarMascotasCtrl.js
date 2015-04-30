'use strict';

app.controller('editarMascotasCtrl', ['$scope', '$location', '$http',
    function($scope, $location, $http) {

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

    }
]);
'use strict';

app.controller('editarMascotasCtrl', ['$scope', '$location', '$http', 'editarperfilmascotasService',
    function($scope, $location, $http, editarperfilmascotasService) {

        $scope.Iniciar = function(){
            $scope.masterMascota =  JSON.parse(sessionStorage.tempIDMascota);
            $scope.editadoMascota =  JSON.parse(sessionStorage.tempIDMascota);
            $scope.infoSalud = null;
            $http.post('data/getSaludMascotas.php',$scope.editadoMascota.IDSalud).success(function(msg) { $scope.infoSalud = msg[0]
                // console.log($scope.infoSalud);
                $scope.masterMascota.atrIdSalud = $scope.infoSalud.ID_SALUD;
                $scope.masterMascota.atrVeterinario = $scope.infoSalud.NOMBRE_VETERINARIO;
                $scope.masterMascota.atrEnfermedad = $scope.infoSalud.NOMBRE_ENFERMEDAD;
                $scope.masterMascota.atrTratamiento = $scope.infoSalud.NOMBRE_TRATAMIENTO;
                $scope.masterMascota.atrMedicamentos = $scope.infoSalud.NOMBRE_MEDICAMENTOS;
                $scope.masterMascota.atrSeveridad = $scope.infoSalud.SEVERIDAD;
                $scope.editadoMascota.atrIdSalud = $scope.infoSalud.ID_SALUD;
                $scope.editadoMascota.atrVeterinario = $scope.infoSalud.NOMBRE_VETERINARIO;
                $scope.editadoMascota.atrEnfermedad = $scope.infoSalud.NOMBRE_ENFERMEDAD;
                $scope.editadoMascota.atrTratamiento = $scope.infoSalud.NOMBRE_TRATAMIENTO;
                $scope.editadoMascota.atrMedicamentos = $scope.infoSalud.NOMBRE_MEDICAMENTOS;
                $scope.editadoMascota.atrSeveridad = $scope.infoSalud.SEVERIDAD;

                //console.log($scope.infoSalud.NOMBRE_TRATAMIENTO);
            });


            $("#SecondPanel").hide();

            var changeFlag = true;
            $("#btnSalud").click(function(){
                if(changeFlag) {
                    $("#btnSalud").text("Ocultar Editar Salud");
                    $("#firstPanel").animate({
                        marginLeft: '0px'
                    }, 'slow');
                    $("#SecondPanel").show('slow');
                    changeFlag = false;
                }
                else {
                    $("#btnSalud").text("Editar Salud");
                    $("#firstPanel").animate({
                        marginLeft: '18%'
                    }, 'slow');
                    $("#SecondPanel").hide('slow');
                    changeFlag = true;
                }
            })
        };

        $scope.verificarDatos = function() {
            $scope.iguales = angular.equals($scope.editadoMascota, $scope.masterMascota);
            if ($scope.iguales) {
                editarperfilmascotasService.datosIguales($scope);
            } else {
                editarperfilmascotasService.datosModificados($scope);
            };

        };

        $scope.NoCambios = function() {
            $location.path('/petCatalogue');
        }


    }
]);
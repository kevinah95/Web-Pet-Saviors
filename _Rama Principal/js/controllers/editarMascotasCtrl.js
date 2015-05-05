'use strict';

app.controller('editarMascotasCtrl', ['$scope', '$location', '$http', 'editarperfilmascotasService',
    function($scope, $location, $http, editarperfilmascotasService) {

        // Hace una copia de la mascota para la comparación y carga los datos de salud. Carga el jQuery para la animación. 
        $scope.Iniciar = function(){
            $scope.masterMascota =  JSON.parse(sessionStorage.tempIDMascota);
            $scope.editadoMascota =  JSON.parse(sessionStorage.tempIDMascota);
            console.log($scope.editadoMascota);
            $scope.infoSalud = null;
            $http.post('data/getSaludMascotas.php',$scope.editadoMascota.IDSalud).success(function(msg) { 

                $scope.infoSalud = msg[0]
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

        //Compara si los datos son iguales. 
        $scope.verificarDatos = function() {
            $scope.iguales = angular.equals($scope.editadoMascota, $scope.masterMascota);
            if ($scope.iguales) {
                editarperfilmascotasService.datosIguales($scope);
            } else {
                editarperfilmascotasService.datosModificados($scope);
            };

        };

        //Devuelve la página al catálogo cuando no se produjeron cambios. 
        $scope.NoCambios = function() {
            $location.path('/petCatalogue');
        }


    }
]);
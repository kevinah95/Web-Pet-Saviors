'use strict'
app.controller('agregartrCtrl', ['$scope', '$http', '$location',
        function($scope, $http, $location) {
            $scope.inicializar = function() {
                $scope.objTipos = {
                    tipo: "",
                    razas: []
                };
                $scope.addRaza = function() {
                    var lastIndex = $scope.objTipos.razas.length;
                    if (lastIndex > 0) {
                        var lastItem = $scope.objTipos.razas[lastIndex - 1];

                        var matches = $scope.objTipos.razas.filter(function(datum) {
                            return datum.raza === lastItem.raza;
                        });
                        if (matches.length === 1) {
                            $scope.objTipos.razas.push({

                                raza: ""
                            });
                        } else {
                            swal('Valor Duplicado', 'La raza ya se encuentra registrada', 'error');
                        }

                    } else {
                        $scope.objTipos.razas.push({

                            raza: ""
                        });
                    }

                };
                $scope.removeRaza = function(pItem) {
                    $scope.objTipos.razas.splice(pItem, 1);
                };


            };

            $scope.aceptar = function() {
                var $promise = $http.post('data/crearTipoRaza.php', $scope.objTipos); //send data to user.php
                $promise.then(function(msg) {
                    if(msg.data === 'Insertado'){
                        swal('Información Correcta','La información se ingresó correctamente','success');
                        $location.path('/home');
                    }else{
                        swal('Información Incorrecta','Hubo un error en la actualización','error');
                    };
                });
            };


        }]);
'use strict'
app.controller('agregartrCtrl', ['$scope', '$http', '$location',
        function($scope, $http, $location) {
            
            // Carga las variables iniciales de la clase de agregar Tipo y Raza
            $scope.inicializar = function() {
                $scope.objTipos = {
                    tipo: "",
                    razas: []
                };

                // Valida con la base si está duplicada, si no inserta la nueva tupla. 
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

                // Se usa para manejar la cantidad de elementos de la lista de razas que el usuario quiere agregar en la ventana. 
                $scope.removeRaza = function(pItem) {
                    $scope.objTipos.razas.splice(pItem, 1);
                };


            };

            // Confirma la ejecución de lo que el usuario quiere agregar y llama al php para escribir en la base
            $scope.aceptar = function() {
                var $promise = $http.post('data/crearTipoRaza.php', $scope.objTipos); //envía los datos a creaTipoRaza.php
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
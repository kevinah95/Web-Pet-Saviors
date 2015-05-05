'use strict';

app.controller('editarperfilCtrl', ['$scope', '$location', '$http', 'editarperfilService',
    function($scope, $location, $http, editarperfilService) {

        // Almacena las variables del usuario logueado y revisa el nivel de privilegios. 
        $scope.inicializar = function() {
            $scope.masterUsuario = JSON.parse(sessionStorage.user);
            $scope.editadoUsuario = JSON.parse(sessionStorage.user);
            $scope.ADOPTANTE = ($scope.editadoUsuario.ES_ADOPTANTE === 1) ? true : false;
            $scope.RESCATISTA = ($scope.editadoUsuario.ES_RESCATISTA === 1) ? true : false;
        };

        // Setea los campos de adoptante y rescatista booleanos. 
        $scope.booleanos = function() {
            $scope.editadoUsuario.ES_ADOPTANTE = $scope.ADOPTANTE ? 1 : 0;
            $scope.editadoUsuario.ES_RESCATISTA = $scope.RESCATISTA ? 1 : 0;

        };
        
        // Revisa si los nuevos datos son válidos. 
        $scope.verificarDatos = function() {
            $scope.editadoUsuario.TELEFONO = parseInt($scope.editadoUsuario.TELEFONO, 10);
            
            (parseInt($scope.editadoUsuario.TELEFONO, 10)) ? console.log(typeof $scope.editadoUsuario.TELEFONO) : console.log(typeof $scope.editadoUsuario.TELEFONO);

            if (isNaN($scope.editadoUsuario.TELEFONO)) $scope.editadoUsuario.TELEFONO = 0;

            $scope.iguales = angular.equals($scope.editadoUsuario, $scope.masterUsuario);
            
            if ($scope.iguales) {
                editarperfilService.datosIguales($scope);
            } else {
                editarperfilService.datosModificados($scope);
            };

        };

    }
]);
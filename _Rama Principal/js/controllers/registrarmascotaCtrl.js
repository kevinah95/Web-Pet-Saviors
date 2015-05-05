'use strict';

app.controller('registrarmascotaCtrl', ['$scope', '$location', '$http',
    function($scope, $location, $http) {

        //Carga los tipos las razas y el usuario. 
        $scope.inicializar = function() {
            var $promise = $http.post('data/getTipoAnimal.php')
                .success(function(msg) {
                    $scope.masterUsuario = JSON.parse(sessionStorage.user);

                    $scope.tipos = msg;
                    $scope.newMascota = {
                        raza: 'raza',
                        tipo: 'tipo',
                        duenio: $scope.masterUsuario.CORREOUSUARIO
                    };

                    $scope.getRazaAnimal($scope.tipos[0].NOMBRE_TIPO);
                    $scope.newMascota.tipo = $scope.tipos[0].NOMBRE_TIPO;
                });
        };

        //Consulta la base para obtener la raza de cierto animal. 
        $scope.getRazaAnimal = function(tipoAnimal) {
            $scope.newMascota.tipo = tipoAnimal;
            var $promise = $http.post('data/getRazaAnimal.php', tipoAnimal);
            $promise.then(function(msg) {
                $scope.razas = msg.data;
                $scope.newMascota.raza = $scope.razas[0].NOMBRE_RAZA;
            
            });
        };

        //Setea el filtro de raza. 
        $scope.seleccionRaza = function(razaAnimal) {
            $scope.newMascota.raza = razaAnimal;
        };

        //Llama al php que inserta en la tabla mascota. 
        $scope.crear = function(mascota) {
            var $promise = $http.post('data/crearMascota.php', mascota);
            $promise.then(function(msg) {
                console.log(msg);
                swal('Información Correcta','La mascota se registró correctamente','success');
                $location.path('/home');
            });
        };

    }
]);
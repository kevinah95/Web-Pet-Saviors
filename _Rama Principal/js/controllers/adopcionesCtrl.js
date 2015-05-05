'use strict'

app.controller('adopcionesCtrl', function($scope,$location,$http){
	$scope.inicializarTabla = function(){
		$scope.varUser = JSON.parse(sessionStorage.user);
		$http.post('data/conectAdopTable.php',$scope.varUser)
		.success(function(data) { 
		$scope.posts = data; })
	}
	$scope.guardarID = function(pID){
		sessionStorage.tempIDAdopcion = pID;
		$location.path('/fotosAdopciones');
	}
	$scope.abrirVentana = function(pMascota,pAdoptante,pRescatista,pAdopcion) {
		sessionStorage.Mascota = pMascota;
		sessionStorage.Adoptante = pAdoptante;
		sessionStorage.Rescatista = pRescatista;
		sessionStorage.Adopcion = pAdopcion;
		var fondo = document.getElementById("fondoDev");
        var dialog = document.getElementById("motivoDev");
        fondo.style.display = "block";
        dialog.style.display = "block";

        var winWidth = window.innerWidth;
        var winHeight = window.innerHeight;

        dialog.style.left = (winWidth/2) - 480/2 + "px";
        dialog.style.top = (winHeight/2) - 150 + "px";
	}

	$scope.devolver = function(){
		$scope.mensaje = 
                     {
                         IDMASCOTA: sessionStorage.getItem('Mascota'),
                         DEVUELVE: sessionStorage.getItem('Adoptante'),
                         RESCATA: sessionStorage.getItem('Rescatista'),
                         ADOPCION: sessionStorage.getItem('Adopcion'),
                         MOTIVO: $scope.men.motivo
                     };
        console.log($scope.mensaje);
		$http.post('data/devolver.php',$scope.mensaje)
		.success(function(msg){
        console.log(msg);})


	}

	$scope.cancelar = function(){
		var fondo = document.getElementById("fondoDev");
        var dialog = document.getElementById("motivoDev");
        fondo.style.display = "none";
        dialog.style.display = "none";
	};
});
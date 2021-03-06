var app = angular.module('PetSaviorsApp',['ngRoute','ngCookies','angular.filter']);
app.config(['$routeProvider', function($routeProvider) {
  // $routeProvider.when(path,route) en path es cuendo en la barra del navegador accedo a http://localhost/login-angularjs/app/#{/path} por ejemplo.
  $routeProvider.when('/inicio', {templateUrl: 'partials/inicio.html', controller:'inicioCtrl'});
  $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller:'loginCtrl', css: 'css/login.css'});//, controller:'loginCtrl'}); //llama a partials/login.html y usa el loginCtrl.js
  $routeProvider.when('/home', {templateUrl: 'partials/home.html'});
  $routeProvider.when('/perfil', {templateUrl: 'partials/perfil.html', controller: 'perfilCtrl'});
  $routeProvider.when('/editarPerfil', {templateUrl: 'partials/editarPerfil.html',controller: 'editarperfilCtrl' , css: 'css/EditarUsuario.css'});
  $routeProvider.when('/registrarMascota', {templateUrl: 'partials/registrarMascota.html', controller: 'registrarmascotaCtrl' , css: 'css/RegistroMascota.css'});
  $routeProvider.when('/users', {templateUrl: 'partials/users.html', controller: 'usersCtrl', css: 'css/styleUsers.css'});
  $routeProvider.when('/pet', {templateUrl: 'partials/pet.html', controller: 'petCtrl', css: 'css/stylePet.css'});
  $routeProvider.when('/petCatalogue', {templateUrl: 'partials/petCatalogue.html', controller: 'petCatalogueCtrl', css: 'css/stylePet.css'});
  $routeProvider.when('/testrecomendar', {templateUrl: 'partials/testrecomendar.html', controller: 'testrecomendarCtrl', css: 'css/testrecomendar.css'});
  $routeProvider.when('/perfilMascotas', {templateUrl: 'partials/perfilMascotas.html', controller: 'perfilMascotasCtrl', css: 'css/petProfileStyle.css'});
  $routeProvider.when('/editarMascotas', {templateUrl: 'partials/editarMascotas.html', controller: 'editarMascotasCtrl', css: 'css/EditPetProfile.css'});
  $routeProvider.when('/notificaciones', {templateUrl: 'partials/notificaciones.html', controller: 'notificacionesCtrl', css: 'css/widgets.min.css'});
  $routeProvider.when('/listanegra', {templateUrl: 'partials/listanegra.html', controller: 'listanegraCtrl'});
  $routeProvider.when('/adopciones', {templateUrl: 'partials/adopciones.html', controller: 'adopcionesCtrl', css: 'css/adopciones.css'});
  $routeProvider.when('/fotosAdopciones', {templateUrl: 'partials/fotosAdopciones.html', controller: 'fotosAdopcionesCtrl'});
  $routeProvider.when('/resultadoTest', {templateUrl: 'partials/resultadoTest.html', controller: 'resultadotestCtrl', css: 'css/stylePet.css'});
  $routeProvider.when('/testadopcion', {templateUrl: 'partials/testadopcion.html', controller: 'testadopcionCtrl', css: 'css/testadopcion.css'});
  $routeProvider.when('/resultadoadopcion', {templateUrl: 'partials/resultadoadopcion.html', controller: 'resultadoadopcionCtrl', css: 'css/testadopcion.css'});
  $routeProvider.when('/agregartr', {templateUrl: 'partials/agregartr.html', controller: 'agregartrCtrl', css: 'css/agregartr.css'});
  $routeProvider.when('/facebook', {templateUrl: 'partials/facebook.html', controller: 'facebookCtrl'});
  $routeProvider.otherwise({redirectTo: '/inicio'});
}]);

app.run(function($rootScope, $location, loginService) {
    var routespermission = ['/home'];
    $rootScope.$on('$routeChangeStart', function() {
        if (routespermission.indexOf($location.path()) != -1) {
            var connected = loginService.islogged();

            if (!connected) {
                $location.path('/login');
            }
        }
    });

    window.fbAsyncInit = function() {
    FB.init({
      appId      : '902887406428355',
      xfbml      : true,
      version    : 'v2.3'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/es_LA/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
  
});


// Para usar el route styles css https://github.com/tennisgent/angular-route-styles
app.directive('head', ['$rootScope','$compile',
			function($rootScope, $compile){
				return {
					restrict: 'E',
					link: function(scope, elem){
						var html = '<link rel="stylesheet" ng-repeat="(routeCtrl, cssUrl) in routeStyles" ng-href="{{cssUrl}}" >';
						elem.append($compile(html)(scope));

                        scope.routeStyles = {};

						$rootScope.$on('$routeChangeStart', function (e, next, current) {

							if(current && current.$$route && current.$$route.css){
								if(!Array.isArray(current.$$route.css)){
									current.$$route.css = [current.$$route.css];
								}
								angular.forEach(current.$$route.css, function(sheet){
									delete scope.routeStyles[sheet];
								});
							}

							if(next && next.$$route && next.$$route.css){
								if(!Array.isArray(next.$$route.css)){
									next.$$route.css = [next.$$route.css];
								}
								angular.forEach(next.$$route.css, function(sheet){
									scope.routeStyles[sheet] = sheet;
								});
							}

						});

					}
				};
			}
		]);


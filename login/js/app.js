var app = angular.module('loginApp',['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
  // $routeProvider.when(path,route) en path es cuendo en la barra del navegador accedo a http://localhost/login-angularjs/app/#{/path} por ejemplo.
  $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller:'loginCtrl'});//, controller:'loginCtrl'}); //llama a partials/login.html y usa el loginCtrl.js
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller:'homeCtrl'});
  $routeProvider.otherwise({redirectTo: '/login'});
}]);

app.run(function($rootScope , $location, loginService){

	var routespermission=['/home']; //route that require login
	
	$rootScope.$on('$routeChangeStart',function(){
		if( routespermission.indexOf($location.path()) != -1 ){
			var connected = loginService.islogged();
			// then() called when connected gets back the $http.post('path')
			connected.then(function(msg){
				if(!msg.data) $location.path('/login');
			});
			
		}
	});

});
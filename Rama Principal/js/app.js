var app = angular.module('loginApp',['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
  // $routeProvider.when(path,route) en path es cuendo en la barra del navegador accedo a http://localhost/login-angularjs/app/#{/path} por ejemplo.
  $routeProvider.when('/inicio', {templateUrl: 'partials/inicio.html', controller:'inicioCtrl'});
  $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller:'loginCtrl', css: 'css/login.css'});//, controller:'loginCtrl'}); //llama a partials/login.html y usa el loginCtrl.js
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller:'homeCtrl'});
  $routeProvider.otherwise({redirectTo: '/inicio'});
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
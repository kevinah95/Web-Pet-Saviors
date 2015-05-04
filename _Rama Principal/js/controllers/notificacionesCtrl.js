'use strict'
 
app.controller('notificacionesCtrl', function($scope,$location,$http){
	$scope.inicializarNot = function(){
		$scope.varUser = JSON.parse(sessionStorage.user);
		$http.post('data/conectNotifyTable.php',$scope.varUser)
		.success(function(data) { 
		$scope.posts = data; })
	}
	$scope.guardarID = function(pID){
		sessionStorage.tempIDForm = pID;
		console.log(sessionStorage.getItem('tempIDForm'));
		$location.path('/resultadoadopcion');
	};
});
'use strict';

app.controller('usersCtrl', ['$scope','$http','usersService', '$location', function($scope,$http,usersService,$location){
	$scope.users=function(){
		$location.path('/users');
	};

	$http.get('data/conectUserTable.php').success(function(data) { $scope.posts = data; });

}]);

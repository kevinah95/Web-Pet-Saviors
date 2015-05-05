function publicar(){
	console.log('Face');
}

app.controller('facebookCtrl', function($scope, facebookService) {

    $scope.publicar = function() {

        facebookService.verificarLogged();
        facebookService.postImagen();
            // .then(function(response) {
            //     console.log(response);
            // });
    };


});
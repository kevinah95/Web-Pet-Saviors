// 'use strict';
app.factory('facebookService', function($http, $location, $q) {

    var isLogged = false;

    function statusChangeCallback(response) {
        console.log('statusChangeCallback');
        console.log(response);
        if (response.status === 'connected') {
            publicarImagen();
        } else if (response.status === 'not_authorized') {
            FB.login(function(response) {

            }, {
                // scope: 'email,user_likes,public_profile,publish_actions'
                scope: 'public_profile,email'
            });
        } else {
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.
            FB.login(function(response) {
                // Handle the response object, like in statusChangeCallback() in our demo
                // code.
            });
        }
    }

    function publicarImagen() {
        
        // FB.api(
        //     "/me/photos",
        //     "POST", {
        //         "caption": 'Publicamos en Face señores!',
        //         "url": "http://www.yupiyupi.com/wp-content/uploads/2008/08/cacheton.jpg"
        //     },
        //     function(response) {
        //         if (response && !response.error) {
        //             /* handle the result */
        //         }
        //     }
        // );
        
        FB.api('/me/feed', 'post', {
                message: 'Hello, world!'
            });
        
    }

    return {
        verificarLogged: function() {
            FB.getLoginStatus(function(response) {
                statusChangeCallback(response);
            });
        },
        postImagen: function() {
            
            publicarImagen();

        }


    }
});
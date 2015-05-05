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
                scope: 'publish_actions'
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
        //         "url": "http://institutoperro.com/wp-content/uploads/2014/01/20140130011937.jpg"
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
            // var deferred = $q.defer();
            // FB.api(
            //     "/me/photos",
            //     "POST", {
            //         "caption": 'Publicamos en Face señores!',
            //         "url": "http://institutoperro.com/wp-content/uploads/2014/01/20140130011937.jpg"
            //     }, function(response) {
            //         if (!response || response.error) {
            //             deferred.reject('Error occured');
            //             console.log('Error' + response);
            //             return deferred.promise;
            //         } else {
            //             deferred.resolve(response);
            //             console.log('promete');
            //             return deferred.promise;
            //         }
            //     });

            // publicarImagen();
            // FB.api('/me/feed', 'post', {
            //     message: 'Hello, world!'
            // });

        }


    }
});
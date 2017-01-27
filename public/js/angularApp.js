//this angularApp.js file is included in the index.html file. It is able
//to recognize the route, TODO how does angular know what the route is? TODO
//and based on the route, it injects the appropriate partial html
//setting up the angular application
var Arena = angular.module('Arena', ['ngCookies']).
    config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){
        $routeProvider.
            when('/', {
                templateUrl : 'partials/partial.html',
                controller: uploadController
            }).
            otherwise({
                redirectTo: 'partials/partial.html'
            });
        $locationProvider.html5Mode(true);
    }]);

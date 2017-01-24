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



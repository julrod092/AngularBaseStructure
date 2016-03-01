'use strict';

/* App Module */

var cotizadorApp = angular.module('cotizadorApp', [
    'ngRoute',
    'ngMaterial',
    'eee-c.angularBindPolymer',

    'cotizadorControllers'
]);

cotizadorApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/datosbasicos', {
                templateUrl: 'partials/datos-basicos.html',
                controller: 'DatosBasicosCtrl'
            }).
            otherwise({
                redirectTo: '/datosbasicos'
            });
    }]);
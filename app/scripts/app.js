(function() {
  'use strict';

  angular.module('cotizadorApp', [
      'ngRoute',
      'ngMaterial',
      'eee-c.angularBindPolymer'
    ])

  .config(function($routeProvider, $mdThemingProvider) {
    $mdThemingProvider.theme('docs-dark')
        .primaryPalette('indigo')
        .accentPalette('blue');

    $routeProvider.
    when('/datosbasicos', {
      templateUrl: 'scripts/modules/datosBasicos/datos-basicos.html',
      controller: 'DatosBasicosCtrl',
      controllerAs: "datosBasicos"
    }).
    otherwise({
      redirectTo: '/datosbasicos'
    });
  });
})();

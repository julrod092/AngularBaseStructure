(function() {
  'use strict';

  angular.module('cotizadorApp')
    .controller('DatosBasicosCtrl', DatosBasicosCtrl);

  function DatosBasicosCtrl() {

    var context = this;
    context.name = "Hola";
    context.description = "Mundo";

    context.user = {
      title: 'Developer',
      email: 'ipsum@lorem.com',
      firstName: '',
      lastName: '',
      company: 'Google',
      address: '1600 Amphitheatre Pkwy',
      city: 'Mountain View',
      state: 'CA',
      biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
      postalCode: '94043'
    };

    context.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
      'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
      'WY').split(' ').map(function(state) {
      return {
        abbrev: state
      };
    })

    context.pizzaState = "123";
    context.value = function(value) {
      console.log("value: " + value);

      context.pizzaState = context.pizzaState * 2;
    };
  }
})();

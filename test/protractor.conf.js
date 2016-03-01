
exports.config = {
  seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.47.1.jar',
  chromeDriver: '../node_modules/protractor/selenium/chromedriver',

  specs: [
    '../test/e2e/*.js'
  ],
  onPrepare: function() {
    global.EC = protractor.ExpectedConditions;
  },

  //Navegadores en los que se realizarán las pruebas, por cada navegador se debe especificar un driver
  multiCapabilities: [
    {'browserName': 'chrome'}
  ],
  baseUrl: 'http://localhost:3000/',
  framework: 'jasmine'
};

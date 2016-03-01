/*Functional test to "Hello  world"*/

"use strict";

describe('Protractor Demo App', function() {
  it('Deberia tener el titulo "My Cool Title"', function() {
    browser.get('http://localhost:3000/');
    expect(browser.getTitle()).toEqual('My Cool Title');
  });
});

var Browser = require('zombie');
var assert = require('assert');
var chai = require('chai');
var expect  = chai.expect;
var assert = chai.assert;

describe('home page', function() {
  beforeEach(function() {
    this.browser = new Browser({ site: 'http://localhost:8080' });
  });

  beforeEach(function(done) {
    this.browser.visit('/', done);
  });

  it('should load the page with a player ship in a default position', function(){
    var browser = this.browser;
    this.browser.wait().then( function() {
      browser.assert.element('.ship');
    });
  });

  it('should have a computer ship', function(){
    var browser = this.browser;
    this.browser.wait().then( function() {
      browser.assert.element('.computer-ship');
    });
  });


});

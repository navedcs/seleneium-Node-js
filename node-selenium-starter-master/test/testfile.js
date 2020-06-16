/*var assert = require('chai').assert;
require('chai').should();
var keys = require('selenium-webdriver').Key;
var until = require('selenium-webdriver').until;
var brser = require('../browser/index');
var driver;

describe('App', function() {
    beforeEach(function() {
        brser.lauch_google();
    })

    it('app should return hello', function() {
        assert.equal(brser.func2(), "hello");
    });
});
*/

var browser = require('../browser/index');
const { Driver } = require('selenium-webdriver/chrome');
var keys = require('selenium-webdriver').Key;
var until = require('selenium-webdriver').until;
var assert = require('chai').assert;
require('chai').should();

// Use implicit timeouts
const ELEMENT_TIMEOUT = 6000;
const PAGE_TIMEOUT = 10000;
describe('Google.com shopping test', function() {
    // This test should never exceed 25 seconds.
    this.timeout(25000);

    beforeEach(function() {
        this.browser = browser.getLocalBrowser();
    })

    it('LogIn', function(done) {
        var self = this;

        this.browser.get('https://webmail.qainfotech.com/#1')
            .then(function() {
                return self.browser
                    .wait(
                        until.elementLocated({ xpath: '//*[@id="username"]' }),
                        ELEMENT_TIMEOUT
                    )
            })
            .then(function(element) {
                element.sendKeys('navedalam')
                    //element.sendKeys(keys.ENTER)

                return self.browser
                    .wait(
                        until.elementLocated({ xpath: '//*[@id="password"]' }),
                        ELEMENT_TIMEOUT
                    )
            })
            .then(function(element) {
                element.sendKeys("N@v3d!0000")
            })
            .then(function() {
                return self.browser
                    .wait(
                        until.elementLocated({ xpath: '//*[@type="submit"]' }),
                        ELEMENT_TIMEOUT
                    )
            })
            .then(function(element) {
                element.click();

            }).then(function() {
                done();
            })
    })

    it("Title check", function(done) {
        self.browser.getTitle().then(function(title) {
            assert.equal("", title)
        });
        done();
    })
    it("check name", function(done) {
        return self.browser.wait(
            until.elementLocated({ xpath: '//div[@id="z_userName"]' }),
            ELEMENT_TIMEOUT).then(function(element) {
            console.log("ELEMENTSSS+ " + element);
        })
        done();
    })



    afterEach(
        function() {
            this.browser.quit().done();
        }
    )
})
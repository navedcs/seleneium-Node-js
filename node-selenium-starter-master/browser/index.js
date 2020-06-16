var os = require('os');
var webdriver = require('selenium-webdriver');
var path = require('path');

var getLocalBrowser = () => {
    var chrome = require('selenium-webdriver/chrome'),
        exeName = {
            "Linux": "bin/linux/chromedriver",
            "Darwin": "bin/mac/chromedriver",
            "Windows_NT": "bin/windows/chromedriver.exe"
        },
        exeLocation = path.resolve(__dirname, path.relative(__dirname, exeName[os.type()])),
        service = new chrome.ServiceBuilder(exeLocation).build(),
        driver = new chrome.Driver(webdriver.Capabilities.chrome(), service),
        driverWindow = driver.manage().window();

    driverWindow.maximize();

    return driver;
}

const func2 = () => {
    return "hello";
}

module.exports = {
    getLocalBrowser,
    func2
}

/*var os = require('os');

var path = require('path');

var lauch_google = () => {
    var webdriver = require('selenium-webdriver');
    var driver = new webdriver.Builder().forBrowser('chrome').build();
    driver.get('https://webmail.qainfotech.com/');

}


const func2 = () => {
    return "hello";
}

module.exports = {
    lauch_google,
    func2
}
*/
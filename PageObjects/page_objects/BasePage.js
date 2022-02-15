const { browser, ExpectedConditions } = require("protractor");
const EC = ExpectedConditions;

class BasePage {

    wait(waitInMilliseconds) {
        return browser.sleep(waitInMilliseconds);
    };

    getCurrentUrl() {
        return browser.getCurrentUrl();
    };

    open(url) {
        return browser.get(url);
    };

    waitForElement(value) {
        return browser.wait(EC.visibilityOf(value.element), 5000);
    };

    backButtonClick() {
        return browser.navigate().back();
    };

}

module.exports = BasePage;
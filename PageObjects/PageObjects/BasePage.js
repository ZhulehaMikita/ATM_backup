const { browser, ExpectedConditions } = require("protractor");
const logger  = require("../configs/logger.config");
const Element = require("./Element");
const EC = ExpectedConditions;

class BasePage {

    wait(waitInMilliseconds) {
        logger.info(`Browser waits ${waitInMilliseconds} ms`);
        return browser.sleep(waitInMilliseconds);
    };

    async getCurrentUrl() {
        let url = await browser.getCurrentUrl();
        logger.info(`Browser URL is ${url}`);
        return browser.getCurrentUrl();
    };

    open(url) {
        logger.info(`Browser has opened ${url}`);
        return browser.get(url);
    };

    waitForElement(value) {
        if (value) {
            logger.info(`Browser is waiting for '${value.elementName}'`);
        } else {
            logger.error(`Element is not defined`);
        }
        return browser.wait(EC.visibilityOf(value.element), 5000);
    };

    backButtonClick() {
        logger.info(`Back button is applied`);
        return browser.navigate().back();
    };

    scrollToEllementWithJS(value){
        logger.info(`Browser has scrolled to '${value.elementName}'`);
        return browser.executeScript("arguments[0].scrollIntoView()", value.element);
    };
    
    clickWithJS(value){
        logger.info(`'${value.elementName}' has been clicked`);
        return browser.executeScript('arguments[0].click()', value.element);
    }
}

module.exports = BasePage;
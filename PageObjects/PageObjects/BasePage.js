const { browser, ExpectedConditions } = require("protractor");
const logger  = require("../configs/logger.config");
const Element = require("./Element");
const EC = ExpectedConditions;

class BasePage {

    constructor() {
        this.internationalTab = new Element('css', '[data-e2e-element-id=internationalTax]', 'International Tab');
        this.internationalTaxTopics = new Element('css', '[data-e2e-element-id=intTaxTopics]', 'International Tax Topics');
        this.internationalTopicsInput = new Element('css', 'input.topics-search-input', 'International Topics Input');
        this.belgiumLink = new Element('text', 'Belgium', 'Belgium link');
        this.input = new Element('css', 'input[type=search]', 'Main input');
        this.magnifierIcon = new Element('css', 'span.wk-icon-search', 'Magnifier Icon');
        this.internationalTabOnSearch = new Element('text', 'International', 'International tab on SRL');
        this.heading = new Element('css', 'h1.e2e-header-title', 'Heading');
        this.accountingLink = new Element('text', 'Accounting for Uncertain Tax Positions', 'Accounting link');
        this.backToTopButtonEnabled = new Element('css', '[style="display: block;"]', 'Back to top button');
        this.footer = new Element('css', '.wk-footer-container', 'Footer');
        this.secondarySearch = new Element('css', 'input[type="text"]', 'Secondary search field');
        this.backToTopButtonDisabled = new Element('css', '.csn-scroll-to-top[style="display: none;"]');
    };

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
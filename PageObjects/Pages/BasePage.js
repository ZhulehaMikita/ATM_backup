const { browser, ExpectedConditions } = require("protractor");
const Element = require("./Element");
const EC = ExpectedConditions;

class BasePage {

    constructor() {
        this.internationalTab = new Element('css', '[data-e2e-element-id=internationalTax]');
        this.internationalTaxTopics = new Element('css', '[data-e2e-element-id=intTaxTopics]');
        this.internationalTopicsInput = new Element('css', 'input.topics-search-input');
        this.belgiumLink = new Element('text', 'Belgium');
        this.input = new Element('css', 'input[type=search]');
        this.magnifierIcon = new Element('css', 'span.wk-icon-search');
        this.internationalTabOnSearch = new Element('text', 'International');
        this.heading = new Element('css', 'h1.e2e-header-title');
    };

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
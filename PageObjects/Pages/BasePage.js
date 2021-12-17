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
        this.accountingLink = new Element('text', 'Accounting for Uncertain Tax Positions');
        this.backToTopButtonEnabled = new Element('css', '[style="display: block;"]');
        this.footer = new Element('css', '.wk-footer-container');
        this.termsAndConditionsLink = new Element('css', 'p a[data-e2e-element-type="link"]');
        this.secondarySearch = new Element('css', 'input[type="text"]');
        this.backToTopButtonDisabled = new Element('css', '[style="display: none;"]');
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
    scrollToEllement(el){
        return browser.executeScript("arguments[0].scrollIntoView()", el)
    };
    switchTo(element){
        return browser.switchTo().frame(element);
    };
    
}

module.exports = BasePage;
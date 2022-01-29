const BasePage = require('./Base_page');

class FederalTaxPage extends BasePage {
    constructor(){
        super();
        this.url = this.url + '/codesections/subtitles';
        this['Highlighted sections'] = element(by.css('.highlighted-sections-widget'));
        this['Federal Tax page title'] = element(by.css('.e2e-header-title'));
        this['Income Taxes link'] = element(by.linkText('Income Taxes'));
    }
}

module.exports = FederalTaxPage;
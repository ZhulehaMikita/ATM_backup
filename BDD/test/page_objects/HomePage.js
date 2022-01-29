const BasePage = require('./Base_page');

class Homepage extends BasePage {
    constructor(){
        super();
        this.url = this.url + '/app/acr/home/federal';
        this['Federal Tab'] = element(by.css('[data-e2e-element-id=federalTax]'));
        this['State Tab'] = element(by.css('[data-e2e-element-id=stateTax]'));
        this['International Tab'] = element(by.css('[data-e2e-element-id=internationalTax]'));
        this['Tax News'] = element(by.css('[data-e2e-element-id=taxNews]'));
        this['All'] = element(by.css('[data-e2e-element-id=all]'));
        this['Federal Tax Widget'] = element(by.css('[data-e2e-widget-id=federalTax]'));
        this['All Federal Tax'] = element(by.css('[data-e2e-element-id=allFederalTax]'));
    }
}

module.exports = Homepage;
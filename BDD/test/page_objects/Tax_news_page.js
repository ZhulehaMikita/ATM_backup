const BasePage = require('./Base_page');

class TaxNews extends BasePage {
    constructor(){
        super();
        this.url = this.url + '/news/list/federal?searchId=870357122&page=1';
        this['Tax News header'] = element(by.css('.e2e-header-title'));
    }
}

module.exports =  TaxNews ;
const Homepage = require('./HomePage');
const FederalTaxPage = require ('./Federal_Tax')
const TaxNews = require('./Tax_news_page')
class Pages {
    constructor(){
        this['Homepage'] = new Homepage ();
        this['Federal Tax Page'] = new FederalTaxPage ();
        this['Tax News page'] = new TaxNews();
    }
}

module.exports = new Pages (); 
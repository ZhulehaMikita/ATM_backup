const Homepage = require('./HomePage');
const FederalTaxPage = require ('./Federal_Tax')

class Pages {
    constructor(){
        this['Homepage'] = new Homepage ();
        this['Federal Tax Page'] = new FederalTaxPage ();
    }
}

module.exports = new Pages (); 
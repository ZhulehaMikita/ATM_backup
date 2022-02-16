const BasePage = require('./BasePage');
const Element = require("./Element");

class SRL extends BasePage {
    constructor(){
        super();
        this.internationalTabOnSearch = new Element('text', 'International');
    }
}

module.exports = new SRL ();
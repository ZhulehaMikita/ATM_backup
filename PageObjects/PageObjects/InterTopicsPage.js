const BasePage = require('./BasePage');
const Element = require("./Element");

class InterTopicsPage extends BasePage {
    constructor(){
        super();
        this.internationalTopicsInput = new Element('css', 'input.topics-search-input');
        this.belgiumLink = new Element('text', 'Belgium');
        this.heading = new Element('css', 'h1.e2e-header-title');
    }
}

module.exports = new InterTopicsPage ();
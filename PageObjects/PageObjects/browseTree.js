const BasePage = require('./BasePage');
const Element = require("./Element");

class BrowseTree extends BasePage {
    constructor(){
        super();
        this.internationalTabOnSearch = new Element('text', 'International');
        this.backToTopButtonEnabled = new Element('css', '[style="display: block;"]', 'Back to top button');
        this.footer = new Element('css', '.wk-footer-container', 'Footer');
        this.backToTopButtonDisabled = new Element('css', '[style="display: none;"]');
    }
}

module.exports = new BrowseTree ();

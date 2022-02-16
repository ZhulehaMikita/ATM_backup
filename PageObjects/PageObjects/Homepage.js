const BasePage = require('./BasePage');
const Element = require("./Element");

class Homepage extends BasePage {
    constructor(){
        super();
        this.input = new Element('css', 'input[type=search]');
        this.magnifierIcon = new Element('css', 'span.wk-icon-search');
        this.internationalTab = new Element('css', '[data-e2e-element-id=internationalTax]');
        this.internationalTaxTopics = new Element('css', '[data-e2e-element-id=intTaxTopics]');
        this.accountingLink = new Element('text', 'Accounting for Uncertain Tax Positions', 'Accounting link');
    }
}

module.exports = new Homepage ();

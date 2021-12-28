const logger  = require("../configs/logger.config");

class Element {

    constructor(type, selector, elementName) {
        if (type == 'text') {
            this.element = element(by.linkText(selector))
        } else if (type == 'css') {
            this.element = element(by.css(selector))
        }
        this.elementName = elementName;
    };

    click() {
        logger.info(`'${this.elementName}' is clicked`);
        return this.element.click();
    };

    sendValues(value) {
        logger.info(`'${value}' has been entered into '${this.elementName}'`);
        return this.element.sendKeys(value);
    };
    
    async getText(){
        let text = await this.element.getText();
        logger.info(`'${text}' has been extracted from '${this.elementName}'`);
        return this.element.getText();
    }
};

module.exports = Element;

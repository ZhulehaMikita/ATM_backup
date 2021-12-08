
class Element {

    constructor(type, selector) {
        if (type == 'text') {
            this.element = element(by.linkText(selector))
        } else if (type == 'css') {
            this.element = element(by.css(selector))
        }
    };

    click() {
        return this.element.click();
    };

    sendValues(value) {
        return this.element.sendKeys(value);
    };
    
    getText(){
        return this.element.getText();
    }
};

module.exports = Element;

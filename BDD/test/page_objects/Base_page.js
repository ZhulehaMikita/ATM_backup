const { browser } = require("protractor");

class BasePage {
    
    constructor(){
        this.url = 'https://answerconnect.cch.com';
    };

    openPage(){
        return browser.get(this.url);
    }
}

module.exports = BasePage;
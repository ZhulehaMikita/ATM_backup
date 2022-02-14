const { browser } = require("protractor");

class BasePage {
    
    constructor(){
        this.url = 'https://answerconnect-qa.psdidevenvs.com';
    };

    openPage(){
        return browser.get(this.url);
    }
}

module.exports = BasePage;
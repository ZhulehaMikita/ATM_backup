const webdriver = require('selenium-webdriver');
const chrome = require('chromedriver');
const By = webdriver.By;
const until = webdriver.until;
const {expect} = require('chai');
const {describe, it} = require('mocha');

// SUT: AnswerConnect

describe('Tabs on SRL check', function () {

    it('Should verify that previously selected tab is highlighted after back button applying', async function () {
        const driver = new webdriver.Builder().forBrowser('chrome').build();
        driver.manage().setTimeouts({implicit: 20000, pageLoad: 10000});
        await driver.get('https://answerconnect.cch.com');
        await driver.wait(until.elementLocated(By.css('input[type=search]')), 5000);
        await driver.findElement(By.css('input[type=search]')).sendKeys('business tax');
        await driver.wait(until.elementLocated(By.css('span.wk-icon-search')), 5000);
        await driver.findElement(By.css('span.wk-icon-search')).click();
        await driver.wait(until.elementLocated(By.linkText('International')), 5000);
        await driver.sleep(3000);
        await driver.findElement(By.linkText('International')).click();
        await driver.sleep(3000);
        await driver.navigate().back();
        let string = await driver.getCurrentUrl();
        await driver.quit();
        expect(string.includes('federal')).to.equal(true);
    })
});
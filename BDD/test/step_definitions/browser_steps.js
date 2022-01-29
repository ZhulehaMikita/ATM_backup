const { When, Then, setDefaultTimeout } = require('cucumber');
const { browser, ExpectedConditions } = require('protractor');
const { expect } = require('chai');
const pageSwitcher = require('./page_switcher');
const EC = ExpectedConditions;
setDefaultTimeout(60000)

When('User is on {string} page', function(value){
    pageSwitcher.setState(value);
    return pageSwitcher.getState().openPage();
});

Then('{string} should be opened', async function (value){
    browser.sleep(1000);
    pageSwitcher.setState(value);
    expect(await browser.getCurrentUrl()).to.equal(pageSwitcher.getUrl());
});

Then('User is located on {string} tab', async function(value){
    let nameOfActiveTab = element(by.css('.active-tab'));
    await browser.wait(EC.presenceOf(nameOfActiveTab), 5000);
    expect(await nameOfActiveTab.getText()).to.equal(await pageSwitcher.getElement(value).getText());
});

Then('User sees {string}', async function(value){
    await browser.wait(EC.presenceOf(pageSwitcher.getElement(value)), 5000);
    expect(await pageSwitcher.getElement(value).isPresent()).to.equal(true);
});

When('User clicks on {string}', async function (value){
    await browser.wait(EC.presenceOf(pageSwitcher.getElement(value)), 5000);
    return pageSwitcher.getElement(value).click();
});

Then('Current url should include {string}', async function (text) {
    let url = await browser.getCurrentUrl();
    expect(url.includes(text)).to.be.equal(true);
});

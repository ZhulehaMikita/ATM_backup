const expect = require("chai").expect;
const { browser } = require("protractor");
const logger  = require("../configs/logger.config");
const BasePage = require('../PageObjects/BasePage');
let webDriver = require('selenium-webdriver');
const Key = webDriver.Key;

describe('Rewriting cases from previous Protractor task according PO models', function () {
    let page = new BasePage();
    
    beforeEach(async function() {
        browser.waitForAngularEnabled(false);
        logger.debug('Test starts...')
        await page.open('https://answerconnect.cch.com/app/acr/home/federal');
        browser.manage().window().maximize();        
    });

    it('Should verify that previously selected tab is highlighted after back button applying', async function () {
        await page.waitForElement(page.input);
        await page.input.sendValues('business tax');
        await page.waitForElement(page.magnifierIcon);
        await page.magnifierIcon.click();
        await page.waitForElement(page.internationalTabOnSearch);
        await page.wait(2000);
        await page.internationalTabOnSearch.click();
        await page.wait(2000);
        await page.backButtonClick();
        let url = await page.getCurrentUrl();
        expect(url.includes('federal')).to.equal(true);
        logger.debug(`Test has been completed successfully`);
    });

    it('Should verify proper work of topics search input field', async function(){
        await  page.waitForElement(page.internationalTab);
        await  page.internationalTab.click();
        await  page.waitForElement(page.internationalTaxTopics);
        await  page.internationalTaxTopics.click();
        await  page.waitForElement(page.internationalTopicsInput);
        await  page.internationalTopicsInput.sendValues('Belgium');
        await  page.waitForElement(page.belgiumLink);
        await  page.belgiumLink.click();       
        let title = await page.heading.getText();
        expect(title).to.equal('Belgium');
        logger.debug(`Test has been completed successfully`);
    });

    it('Verify back to top button functionality ', async function(){
        await page.waitForElement(page.accountingLink);
        await page.clickWithJS(page.accountingLink);
        await page.wait(4000);
        await page.scrollToEllementWithJS(page.footer);
        await page.backToTopButtonEnabled.click();
        let button = await page.backToTopButtonEnabled.element.isPresent();
        expect(button).to.equal(true);
        logger.debug(`Test has been completed successfully`);
    });
    
    it('Verify correct work of input field with query in Upper case', async function(){
        await page.waitForElement(page.input);
        await browser.actions()
        .mouseMove(page.input.element)
        .mouseDown()
        .keyDown(Key.SHIFT)
        .sendKeys('insurance')
        .keyUp(Key.SHIFT)
        .mouseUp()
        .sendKeys(Key.ENTER)
        .perform();
        logger.info(`Text in upper case is entered in input field using browser actions`);
        let url = await page.getCurrentUrl();
        expect(url.includes('INSURANCE')).to.equal(true);
        logger.debug(`Test has been completed successfully`);;
    })
});

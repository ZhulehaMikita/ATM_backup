const expect = require("chai").expect;
const { browser } = require("protractor");
const logger  = require("../configs/logger.config");
const homepage = require('../PageObjects/Homepage');
const interTopicsPage = require('../PageObjects//InterTopicsPage');
const srl = require('../PageObjects/SRL');
const browseTree = require('../PageObjects/browseTree')
let webDriver = require('selenium-webdriver');
const Key = webDriver.Key;

describe('Rewriting cases from previous Protractor task according PO models', function () {
    
    beforeEach(async function() {
        browser.waitForAngularEnabled(false);
        logger.debug('Test starts...')
        await browser.get('https://answerconnect.cch.com/app/acr/home/federal');
        browser.manage().window().maximize();        
    });

    it('Should verify that previously selected tab is highlighted after back button applying', async function () {
        await  homepage.waitForElement(homepage.input)
        await  homepage.input.sendValues('business tax');
        await  homepage.waitForElement(homepage.magnifierIcon);
        await  homepage.magnifierIcon.click();
        await  srl.waitForElement(srl.internationalTabOnSearch);
        await  srl.wait(2000);
        await  srl.internationalTabOnSearch.click();
        await  srl.wait(2000);
        await  srl.backButtonClick();
        let url = await srl.getCurrentUrl();
        expect(url.includes('federal')).to.equal(true);
        logger.debug(`Test has been completed successfully`);
    });

    it('Should verify proper work of topics search input field', async function(){
        await  homepage.waitForElement(homepage.internationalTab);
        await  homepage.internationalTab.click();
        await  homepage.waitForElement(homepage.internationalTaxTopics);
        await  homepage.internationalTaxTopics.click();
        await  homepage.wait(2000);
        await  browser.waitForAngularEnabled(true);
        await  interTopicsPage.waitForElement(interTopicsPage.internationalTopicsInput);
        await  interTopicsPage.internationalTopicsInput.sendValues('Belgium');
        await  interTopicsPage.waitForElement(interTopicsPage.belgiumLink);
        await  interTopicsPage.belgiumLink.click();       
        let title = await interTopicsPage.heading.getText()
        expect(title).to.equal('Belgium');
        logger.debug(`Test has been completed successfully`);
    });

    it('Verify back to top button functionality ', async function(){
        await homepage.waitForElement(homepage.accountingLink);
        await homepage.clickWithJS(homepage.accountingLink);
        await homepage.wait(4000);
        await browseTree.scrollToEllementWithJS(browseTree.footer);
        await browseTree.backToTopButtonEnabled.click();
        let button = await browseTree.backToTopButtonEnabled.element.isPresent();
        expect(button).to.equal(true);
        logger.debug(`Test has been completed successfully`);
    });
    
    it('Verify correct work of input field with query in Upper case', async function(){
        await homepage.waitForElement(homepage.input);
        await browser.actions()
        .mouseMove(homepage.input.element)
        .mouseDown()
        .keyDown(Key.SHIFT)
        .sendKeys('insurance')
        .keyUp(Key.SHIFT)
        .mouseUp()
        .sendKeys(Key.ENTER)
        .perform();
        logger.info(`Text in upper case is entered in input field using browser actions`);
        let url = await srl.getCurrentUrl();
        expect(url.includes('INSURANCE')).to.equal(true);
        logger.debug(`Test has been completed successfully`);;
    })
});

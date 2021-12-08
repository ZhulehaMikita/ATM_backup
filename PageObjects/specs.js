const expect = require("chai").expect;
const { browser } = require("protractor")
const BasePage = require('./Pages/BasePage');

describe('Rewriting cases from previous Protractor task according PO models', function () {
    let page = new BasePage();
    
    beforeEach(function() {
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
        page.open('https://answerconnect.cch.com/app/acr/home/federal');
    });

    it('Should verify that previously selected tab is highlighted after back button applying', async function () {
      await  page.waitForElement(page.input)
      await  page.input.sendValues('business tax');
      await  page.waitForElement(page.magnifierIcon);
      await  page.magnifierIcon.click();
      await  page.waitForElement(page.internationalTabOnSearch);
      await  page.wait(2000);
      await  page.internationalTabOnSearch.click();
      await  page.wait(2000);
      await  page.backButtonClick();
      let url = await page.getCurrentUrl();
      expect(url.includes('federal')).to.equal(true);
    });

    it('Should verify proper work of topics search input field', async function(){
        await  page.waitForElement(page.internationalTab);
        await  page.internationalTab.click();
        await  page.waitForElement(page.internationalTaxTopics);
        await  page.internationalTaxTopics.click();
        await  browser.waitForAngularEnabled(true);
        await  page.waitForElement(page.internationalTopicsInput);
        await  page.internationalTopicsInput.sendValues('Belgium');
        await  page.waitForElement(page.belgiumLink);
        await  page.belgiumLink.click();       
        let title = await page.heading.getText()
        expect(title).to.equal('Belgium');
    });

});

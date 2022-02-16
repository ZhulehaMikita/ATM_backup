const expect = require("chai").expect;
const { browser } = require("protractor")
const homepage = require('./page_objects/Homepage');
const interTopicsPage = require('./page_objects/InterTopicsPage');
const srl = require('./page_objects/SRL');

describe('Rewriting cases from previous Protractor task according PO models', function () {
 
    
    beforeEach(function() {
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
        browser.get('https://answerconnect.cch.com/app/acr/home/federal');
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
    });

});

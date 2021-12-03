const { element, browser, ExpectedConditions } = require("protractor");
const { Driver } = require("selenium-webdriver/chrome");

// SUT: AnswerConnect

describe('List of International Topics check', function() {

    it('Should verify proper work of topics search input field', async function() {
        let EC = ExpectedConditions;
        await browser.waitForAngularEnabled(false);
        await browser.get('https://answerconnect.cch.com/federal');
        await browser.wait(EC.visibilityOf(element(By.css('[data-e2e-element-id=internationalTax]'))), 5000);
        await element(By.css('[data-e2e-element-id=internationalTax]')).click();
        await browser.wait(EC.visibilityOf(element(By.css('[data-e2e-element-id=intTaxTopics]'))), 5000);
        await element(By.css('[data-e2e-element-id=intTaxTopics]')).click();
        await browser.waitForAngularEnabled(true);
        await browser.wait(EC.visibilityOf(element(By.css('input.topics-search-input'))), 5000);
        await element(By.css('input.topics-search-input')).sendKeys('Belgium');
        await browser.wait(EC.visibilityOf(element(By.linkText('Belgium'))), 5000);
        await element(By.linkText('Belgium')).click();
        await expect(element(By.cssContainingText('h1.e2e-header-title', 'Belgium')).getText()).toEqual('Belgium');
    });
  
});
  
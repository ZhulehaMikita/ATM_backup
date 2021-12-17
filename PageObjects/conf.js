// An example configuration file.
exports.config = {
  directConnect: false,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // Capabilities to be passed to the webdriver instance.
  capabilities: 
    {
      "browserName": "chrome",
      'goog:chromeOptions': {
        w3c: false
      },
      "maxInstances": 5,
      "seleniumProtocol": "WebDriver"
    },
  // Framework to use. Jasmine is recommended.
  framework: 'mocha',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['C:/Users/Mikita_Zhuleha/Desktop/Materials/Learning/ATM/atm/atm/PageObjects/*specs.js'],

  // Options to be passed to Mocha.
  mochaOpts: {
    reporter: 'spec',
    timeout: 70000
  }
};

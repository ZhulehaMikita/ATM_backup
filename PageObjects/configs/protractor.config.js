// An example configuration file.
// const yargs = require('yargs').argv;
const args = require('./args');
const file = require('./file.json')

global.envURL = file[args.env];

exports.config = {
  directConnect: true,
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  // Capabilities to be passed to the webdriver instance.
  capabilities: 
    {
      "browserName": "chrome",
      'goog:chromeOptions': {
        w3c: false
      },
      "seleniumProtocol": "WebDriver",
      shardTestFiles: args.sharedTestFiles,
      maxInstances: args.maxInstances,
    },
  // Framework to use. Jasmine is recommended.
  framework: 'mocha',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['C:/Users/Mikita_Zhuleha/Desktop/Materials/Learning/ATM/atm/atm/PageObjects/**/*specs.js'],

  // Options to be passed to Mocha.
  mochaOpts: {
    reporter: 'spec',
    timeout: 70000
  }
};



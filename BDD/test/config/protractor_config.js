const path = require('path');
const yargs = require('yargs').argv;
const reporter = require('cucumber-html-reporter');

const reportOptions = {
    theme: 'bootstrap',
    jsonFile: path.join(__dirname, '../reports/report.json'),
    output: path.join(__dirname, '../reports/cucumber-report.html'),
    reportSuiteAsScenarios: true
};

exports.config = {
    allScriptsTimeout: 60000,
    getPageTimeout: 60000,
    specs: ['../features/*.feature'],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances || 1,
        browserName: 'chrome',
        chromeOptions: {
            args: ['--no-sandbox']
        }
    },
    disableChecks: true,
    directConnect: true,
    ignoreUncaughtExceptions: true,
    cucumberOpts: {
        require: ['../step_definitions/*.js'],
        format:['json:../reports/report.json'],
        tags: yargs.tags || '@smoke'
    },
    onPrepare: function () {
        browser.waitForAngularEnabled(false);
        return browser.manage().window().setSize(1900, 1000);
    },
    afterLaunch: () => {
        return reporter.generate(reportOptions);
    }
};
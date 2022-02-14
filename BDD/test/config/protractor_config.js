const path = require('path');
const yargs = require('yargs').argv;
const reporter = require('cucumber-html-reporter');
const fs = require('fs-extra');
const reportsPath = path.join(__dirname, '../reports');
const cucumberJunitConvert = require('cucumber-junit-convert');

const reportOptions = {
    theme: 'bootstrap',
    jsonFile: path.join(__dirname, '../reports/report.json'),
    output: path.join(__dirname, '../reports/cucumber-report.html'),
    reportSuiteAsScenarios: true
};

const options = {
    inputJsonFile: path.join(__dirname, '../reports/report.json'),
    outputXmlFile: path.join(__dirname, '../reports/report.xml'),
    featureNameAsClassName: true
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
        format:['json:../reports/report.json', '../../node_modules/cucumber-pretty'],
        tags: yargs.tags || '@smoke'
    },
    onPrepare: function () {
        browser.waitForAngularEnabled(false);
        return browser.manage().window().setSize(1900, 1000);
    },
    afterLaunch: () => {
         let array = fs.readdirSync(reportsPath);
         let newArray = require(path.join(__dirname, '../reports/' + array[0]), 'utf-8');
         for (let i= 1; i<array.length; i++){
            let content = require(path.join(__dirname, '../reports/' + array[i]));
            newArray.push(content[0]);
        };
        fs.writeFileSync(path.join(__dirname, '../reports/report.json'), JSON.stringify(newArray, null, ' '));
        reporter.generate(reportOptions);
        cucumberJunitConvert.convert(options);
    }
};
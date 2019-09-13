require('ts-node/register');
var prot = require('protractor');
var helpers = require('./helpers');

exports.config = {
    baseUrl: 'http://localhost:3000/',
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    chromeOnly: true,
    specs: [
        helpers.root('src/**/**.e2e.ts'),
        helpers.root('src/**/*.e2e.ts')
    ],

    exclude: [],

    framework: 'jasmine2',

    capabilities: {
        browserName: 'chrome',
    },

    jasmineNodeOpts: {
        showTiming: true,
        showColors: true,
        isVerbose: false,
        includeStackTrace: false,
        defaultTimeoutInterval: 40000
    },
    directConnect: true,


    onPrepare: function() {
        browser.driver.manage().window().maximize();
        prot.browser.manage().timeouts().pageLoadTimeout(60000);
        prot.browser.manage().timeouts().implicitlyWait(10000);
        prot.browser.manage().timeouts().setScriptTimeout(60000);
    },

    useAllAngular2AppRoots: true
};
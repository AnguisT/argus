import { browser, by, element } from 'protractor';

describe('(e2e) App', () => {

    beforeEach(() => {
        browser.get('./#/');
    });

    it('(e2e) 1. Should have a russian header', () => {
        let titleHeader = browser.driver.findElement(by.id('title-header'));
        titleHeader.getText().then((text) => {
            expect('Аргус').toEqual(text);
        });
    });

    it('(e2e) 2. Should have a english header', () => {
        browser.driver.findElement(by.id('eng')).click();
        browser.sleep(4000);
        let titleHeader = browser.driver.findElement(by.id('title-header'));
        titleHeader.getText().then((text) => {
            expect('Argus').toEqual(text);
        });
    });

    it('(e2e) 3. Should have ENG and RUS language button', () => {
        browser.driver.findElement(by.id('eng')).click();
        browser.sleep(4000);
        let engButton = browser.driver.findElement(by.id('eng'));
        let rusButton = browser.driver.findElement(by.id('rus'));
        engButton.getText().then((text) => {
            expect(text).toEqual('ENG');
        });
        rusButton.getText().then((text) => {
            expect(text).toEqual('RUS');
        });
    });

    it('(e2e) 4. Should have a АНГ and РУС language button', () => {
        let engButton = browser.driver.findElement(by.id('eng'));
        let rusButton = browser.driver.findElement(by.id('rus'));
        engButton.getText().then((text) => {
            expect(text).toEqual('АНГ');
        });
        rusButton.getText().then((text) => {
            expect(text).toEqual('РУС');
        });
    });
});

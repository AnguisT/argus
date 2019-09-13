import { browser } from 'protractor';

describe('(e2e) App', () => {

    beforeEach(() => {
        browser.get('./#/');
    });

    it('(e2e) 1. Should have a russian title', () => {
        browser.getTitle().then((title) => {
            let result  = 'Аргус';
            expect(title).toEqual(result);
        });
    });
});

import { expect } from 'chai';

describe('TED', () => {
    before(() => {
        browser.url('https://www.google.com')
    });

    it('should open google and type TED in search bar ', function () {
        const input = $('//input[@title="Search"]');
        input.setValue('TED');
        browser.keys('Enter');
    });

    it('should check the first title', function () {
        const firstResultTitle = $('//div[@id="res"]//h3').getText();
        const expectedIncludesTitle = 'TED';

        expect(firstResultTitle).to.include(expectedIncludesTitle);
    });
});


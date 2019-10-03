const expect = require('chai').expect;

describe('Main page', () => {
    before(() => {
        browser.url('./.')
    });

    it('Should have correct site name', () => {
        const selector = '//span[@id="site-name"]';
        const actual = $(selector).getText();
        const expected = 'Progress Monitor';

        expect(actual).to.equal(expected);
    });

    it('Site title should have correct color value ', function () {
        const selector = '//span[@id="site-name"]';
        const actualColor = $(selector).getCSSProperty('color').parsed.hex;
        const expectedColor = '#000000';

        expect(actualColor).to.equal(expectedColor);
    });

    it('Should have current year in the footer copywrite line', () => {
        const selector = '//small[@class="d-block mb-3 text-muted"]';
        const text = $(selector).getText();
        const currentYear = '2019';

        expect(text).to.include(currentYear);
    });

});
import { expect } from 'chai' ;
import elements from '../../../../data/loginData'
import sel from '../../../../selectors/loginSelectors';
//const h1 = '//h1';
//const borderColor = '//input[@name-]"email"]';
//const elements = {
//     h1: {
//         color: '#333333',
//         expectedText:'User Login'
//     },
//     borderColor: {
//         emptyBorderColor: '#ced4da',
//         correctFilledBorderColor: '#24c88b',
//         incorrectFilledBorderColor: ''
//     },
// }

describe("Login form design", ()=> {
    before(() => {
        browser.url('./user/login');
    });

    it('should check if h1 is displayed', function () {
        const actual = $(sel.h1).isDisplayed();

        expect(actual).to.be.true;
    });

    it('should have correct h1', function () {
        const actual = $(sel.h1).getText();
        const expected = elements.h1.expectedText;

        expect(actual).to.eq(expected);
    });

    it('should check if h1 color is correct', function () {
        const actualColor = $(sel.h1).getCSSProperty('color').parsed.hex;
        const expectedColor = elements.h1.selector;

        expect(actualColor).to.eq(expectedColor);
    });

    it('should have correct color for correct email field', function () {
        const el = $('//input[@name="email"]');
        el.setValue('qwe@asd.asd');
        const actualBorderColor = $(sel.borderColor).getCSSProperty('border-color').parsed.hex;
        const expectedBorderColor = elements.borderColor.emptyBorderColor;

        expect(actualBorderColor).eq(expectedBorderColor);

    });

    it('should have correct color for empty email field', function () {
        //const el = $('//input[@name="email"]');
        browser.keys('Tab');
        browser.pause(300);
        const actualBorderColor = $(sel.borderColor).getCSSProperty('border-color').parsed.hex;
        const expectedBorderColor = elements.borderColor.correctFilledBorderColor;

        expect(actualBorderColor).eq(expectedBorderColor);

    });

    it('should have correct color for incorrect email field', function () {
        const el = $('//input[@name="email"]');
        el.setValue('qweasd.asd');
        browser.keys('Tab');
        browser.pause(300);
        const actualBorderColor = $(sel.borderColor).getCSSProperty('border-color').parsed.hex;
        const expectedBorderColor = elements.borderColor.incorrectFilledBorderColor;

        expect(actualBorderColor).eq(expectedBorderColor);

    });

});


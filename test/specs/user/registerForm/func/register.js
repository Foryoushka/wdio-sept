import { expect } from 'chai'
import data from './../../../../data/registerData'
import sel from './../../../../selectors/registerSelectors'
import axios from 'axios';
import server from './../../../../data/apiData'
import loginData from './../../../../data/loginData'

describe("user register form functionality --- fields are displayed", ()=> {
    before(()=> {
        browser.url('./.');
    });
    
    it('Should have displayRegister button on the top', function () {
        expect($(sel.registerButton).isDisplayed()).true;
    });

    it('Should redirect to Register form after click to Register button', function () {
        $(sel.registerButton).click();
        const actualTitle = $(sel.h1).getText();
        expect(actualTitle).eq(data.registerTitle);
    });

    it('should have correct url', function () {
        const currentUrl = browser.getUrl();
        expect(currentUrl).eq(data.registerURL);
    });

    it('should have `Real name` field', function () {
         expect($(sel.nameField).isDisplayed()).true;
    });

    it('should have `Email` field', function () {
         expect($(sel.emailField).isDisplayed()).true;
    });

    it('should have `Password` field', function () {
        expect($(sel.passwordField).isDisplayed()).true;
    });

    it('should have `Phone number` field', function () {
        expect($(sel.cellPhoneNumberField).isDisplayed()).true;
    });

    it('should have `About` field', function () {
        expect($(sel.aboutField).isDisplayed()).true;
    });

    it('should have English Level` field', function () {
        expect($(sel.englishLevelField).isDisplayed()).true;
    });

    it('should have `Goals` field', function () {
        expect($(sel.goalsField).isDisplayed()).true;
    });



// describe('User Register form functionality -- Register new user', ()=> {
//
//     before(() => {
//         return axios.post(`${server.serverUrl}/user/login`, {
//             email: loginData.user.admin.email,
//             password: loginData.user.admin.password
//         }).then(response => {
//             console.log (response.data.token);
//
//             return axios.post({
//                 method: 'post',
//                 data: {
//
//                 },
//                 headers: {
//                     'Authorization': response.data.token
//                 }
//             }).then().catch()
//         }).catch(err => {
//             console.log(err);
//         });
//     });

    it('should validate `Submit button` is disabled', function () {
        const buttonisEnabled = $(sel.submitButton).isEnabled();
        expect(buttonisEnabled).false;
    });

    it('should fill in `Real name` field', function () {
        $(sel.cellPhoneNumberField).setValue(data.name);
    });

    it('should fill in `Email` field', function () {
        $(sel.emailField).setValue(data.email);
    });

    it('should fill in `Password` field', function () {
        $(sel.passwordField).setValue(data.password);
    });

    it('should fill in `Cell phone number` field', function () {
        $(sel.cellPhoneNumberField).setValue(data.phone);
    });

    it('should fill in `About` field', function () {
        $(sel.aboutField).setValue(data.about);
    });

    it('should fill in `Goals` field', function () {
        $(sel.goalsField).setValue(data.goals);
    });

    it('should fill in `English level` field', function () {
        $(sel.englishLevelField).selectByVisibleText(data.englishLevel);
    });

    it('should validate `Submit button` is enabled', function () {
        const buttonisEnabled = $(sel.submitButton).isEnabled();
        expect(buttonisEnabled).true;
    });

    // it('should click `Submit button`', function () {
    //
    // });

});



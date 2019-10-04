import sel from './../selectors/registerSelectors'
import data from'./../data/registerData'

class registerHelpers {

    register() {
        browser.url(data.registerURL);
        $(sel.nameField).setValue(data.name);
        $(sel.cellPhoneNumberField).setValue(data.phone);
        $(sel.emailField).setValue(data.email);
        $(sel.passwordField).setValue(data.password);
        $(sel.aboutField).setValue(data.about);
        $(sel.goalsField).setValue(data.goals);
        $(sel.englishLevelField).selectByVisibleText('Elementary');
        $(sel.registerButton).click();
        browser.pause(1000);
    };
};
export default new registerHelpers()

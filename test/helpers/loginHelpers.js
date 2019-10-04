import sel from './../selectors/loginSelectors'
import data from './../data/loginData'


class loginHelpers {

    login() {
        $(sel.emailField).setValue(data.user.admin.email);
        $(sel.passwordField).setValue(data.user.admin.password);
        $(sel.loginButton).click();
        browser.pause(1000);
    };
}
export default new loginHelpers()


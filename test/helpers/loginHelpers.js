class loginHelpers {

    login() {

        browser.url('./user/login');
        const emailField = $('//input[@name="email"]');
        const passwordField = $('//input[@name="password"]');
        const loginButton = $('//button[@type="submit"]');

        const EMAIL = 'admin@test.com';
        const PASSWORD = '11111';

        emailField.setValue(EMAIL);
        passwordField.setValue(PASSWORD);

        loginButton.click();
        browser.pause(1000);
    };
}
export default new loginHelpers()


import help from './../../../helpers/registerHelpers'
import data from './../../../data/apiData'
import dataRegister from './../../../data/registerData'
import axios  from 'axios'

describe('User - Register and Login - Integr', () => {
    before(() => {
        axios.
            post(`${data.serverUrl}/user/login`, {
                email: dataRegister.email,
                password: dataRegister.password
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error){
                console.log(error);
            });

    });

    // it('should', () => {
    //     help.register(browser);
    //     browser.pause(20000);
    // });
});

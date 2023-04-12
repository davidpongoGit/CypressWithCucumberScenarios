class LoginPage {
    get main_container(){
        return cy.get('#root > div').should('have.class', 'login_container');
    }
    get username(){
        return cy.get('[data-test="username"]');
    }
    get password(){
        return cy.get('[data-test="password"]');
    }
    get loginButton(){
        return cy.get('[data-test="login-button"]');
    }
}
export default new LoginPage();
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import loginPage from "../../POM/loginPage";

Given ('login form is displayed', () => {
    cy.visit('/');
    loginPage.main_container.should('be.visible');
})
When ('{string} has been entered', (username) => {
    loginPage.username.type(username);
})
And ('{string} is entered', (password) => {
    loginPage.password.type(password);
})
Then ('user has successfully logged in using {string} with {string}', (username, password) => {
    loginPage.loginButton.click();
    cy.url().should('include', '/inventory.html')
})
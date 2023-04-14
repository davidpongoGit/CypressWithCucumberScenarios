import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import classAttributePage from "../../POM/classAttributePage";
import homePage from "../../POM/homePage";

Given ('Class Attribute Page is displayed', () => {
    cy.visit('/');
    homePage.logo.should('be.visible');
    homePage.classAttributePage.click();
    cy.url().should('include', '/classattr');
    classAttributePage.logo.should('be.visible');
})

When ('I identify the blue button', () => {
    classAttributePage.blueButton.should('be.visible');
})

And ('I click the blue button', () => {
    let spy = cy.spy(window, 'alert');
    classAttributePage.blueButton
        .click()
        .wait(1000)
        .then(() => {
            expect(spy).to.haveOwnProperty('callCount');
            expect(spy).to.be.called;
        });
})

Then ('Pop up alert box is displayed', () => {
    cy.on('window:alert',(txt)=>{
        expect(txt).to.eq('Primary buttons pressed');
    })
})

And ('I confirm the alert box', () => {
    cy.contains('OK').click();
})
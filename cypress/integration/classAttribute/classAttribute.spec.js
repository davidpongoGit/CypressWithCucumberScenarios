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
    classAttributePage.blueButton.should('be.visible'); //Check my Page-Object Model for my identification.
})

And ('I click the blue button', () => {
    //I am setting up an even listener to keep checking the behaviour of the button its clicked.
    let spy = cy.spy(window, 'alert');
    classAttributePage.blueButton
        .click()
        //After the click I am waiting for 1 second and then check there is alert made from the click event.
        .wait(1000)
        .then(() => {
            expect(spy).to.haveOwnProperty('callCount');
            expect(spy).to.be.called;
        });
})

Then ('Pop up alert box is displayed', () => {
    //Here I am checking that the pop-up box has the correct text written inside of it.
    cy.on('window:alert',(txt)=>{
        expect(txt).to.eq('Primary buttons pressed');
    })
})

And ('I confirm the alert box', () => {
    cy.contains('OK').click();
})
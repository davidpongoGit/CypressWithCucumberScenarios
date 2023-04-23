import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
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

When ('I click the blue button', () => {
    //I am setting up an even listener to keep checking the behaviour of the button its clicked.
    let spy = cy.spy(window, 'alert');
    classAttributePage.blueButton.click()
})

Then ('Pop up alert box is displayed', () => {
    //Here I am checking that the pop-up box has the correct text written inside of it.
    cy.on('window:alert', (popUP) => {
        expect(popUP).to.have.text(`Primary buttons pressed`)
    })
})

Then ('I confirm the alert box', () => {
    //Alert box is closed automatically. No need to click on any buttons in our case.
})
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import loadDelaysPage from "../../POM/loadDelaysPage";
import homePage from "../../POM/homePage";

Given ('Home page is displayed', () => {
    cy.visit('/');
    homePage.logo.should('be.visible');
})

When ('I click on Load Delays page link', () => {
    //Code line 12 and 13 are setting up an API spy which comes back as a response when the page has loaded
    cy.intercept('http://uitestingplayground.com/loaddelay').as('pageFullyLoaded');
    //We click on the link to open the page
    homePage.loadDelaysPage.click();
    //Here we are referring back to the API spy which waits 10 seconds for the page to load.
    cy.wait(['@pageFullyLoaded'], {requestTimeout: 10000, responseTimeout: 10000})
})

Then ('I wait until the page loads', () => {
    cy.url().should('include', '/loaddelay');
    loadDelaysPage.logo.should('be.visible');
})

Then ('I click the button on that page', () => {
    loadDelaysPage.buttonAppearingAfterDelays.click();
})
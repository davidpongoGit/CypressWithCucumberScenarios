import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import dynamicIdPage from "../../POM/dynamicIdPage";
import homePage from "../../POM/homePage";

Given ('Dynamic ID Page is displayed', () => {
    cy.visit('/');
    homePage.logo.should('be.visible');
    homePage.dynamicIdPage.click();
    cy.url().should('include', '/dynamicid');
    dynamicIdPage.logo.should('be.visible');
})

When ('I identify the button', () => {
    dynamicIdPage.dynamicIdButton.should('be.visible'); //Identified via type with class name. Those are static.
})

Then ('I click the button', () => {
    dynamicIdPage.dynamicIdButton.click();
})

When ('I refresh the page', () => {
    cy.reload();
})

Then ('Button can be clicked again using the same identification', () => {
    dynamicIdPage.dynamicIdButton.click(); //Button is found and clicked again even after refreshing page. Job done.
    //To prove that this is done correctly, I have written an extra code below not part of the feature
    // to output the text of the button into a console log.
    dynamicIdPage.dynamicIdButton.invoke("text").then((text) => {
        cy.log('This is whats written on the button --->:', text);
    })
})
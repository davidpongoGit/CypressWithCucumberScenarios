import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import hiddenLayersPage from "../../POM/hiddenLayersPage";
import homePage from "../../POM/homePage";

Given ('Hidden Layers Page is displayed', () => {
    cy.visit('/');
    homePage.logo.should('be.visible');
    homePage.hiddenLayersPage.click();
    cy.url().should('include', '/hiddenlayers');
    hiddenLayersPage.logo.should('be.visible');
})

When ('I find the green button', () => {
    hiddenLayersPage.greenButton.should('be.visible');
})

And ('I click the green button', () => {
        hiddenLayersPage.greenButton.click();
})

Then ('I clicked the button again only if its green', () => {
    hiddenLayersPage.greenButton.then($button => {
        if ($button.css('background-color', 'rgba(0, 123, 255)')) {
            //if colour of button is blue, do not click
            cy.log('Background is not green, I shall not click.')
        } else {
            hiddenLayersPage.greenButton.click();
        }
    });
})
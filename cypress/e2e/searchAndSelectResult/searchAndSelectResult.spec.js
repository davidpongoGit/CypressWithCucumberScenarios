import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
require('@cypress/xpath');

Given ('amazon website is open', () => {
    cy.visit('https://www.amazon.com/');
    cy.url().should('eq', 'https://www.amazon.com/'); //Check the url in the search bar matches
    cy.scrollTo('bottom');
    cy.get('#rhf-container > .rhf-border').within(() => {
        cy.get('div').should('contain','See personalized recommendations');
    })
})

When ('we search for a book', () => {
    cy.scrollTo('top');
    cy.get('#twotabsearchtextbox').type('bdd in action');
    cy.get('#nav-flyout-searchAjax').contains('bdd in action').click();
})

Then ('results are displayed', () => {
    cy.get('[data-cel-widget="search_result_1"]').should('be.visible');
    cy.get('[data-cel-widget="search_result_2"]').should('be.visible');
    cy.get('[data-cel-widget="search_result_3"]').should('be.visible');
})

When ('we click on one of the results', () => {
    cy.get('[data-asin="161729165X"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .s-list-col-left > .sg-col-inner > .s-product-image-container > :nth-child(1) > .rush-component > .a-link-normal > .a-section > .s-image').click();
})

Then ('we are taken onto the item page', () => {
    cy.get('#productTitle').should('contain.text', 'BDD in Action: Behavior-driven development for the whole software lifecycle');
})


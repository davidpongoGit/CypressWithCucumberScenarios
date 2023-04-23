import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given ('Our desired web app is open', () => {
    cy.visit('https://hunter.io/email-finder');
})

When ('I click the field', () => {
    cy.get('body > section.product-features > div > div > div.col-md-5 > div:nth-child(1) > a').click();
})

Then ('I am presented with several email addresses', () => {
    cy.url().should('eq', 'https://hunter.io/bulks/email-finder');
    cy.get('body > section.bulk-demo > div > div > div.col-md-5.col-sm-5 > table > tbody > tr:nth-child(2) > td:nth-child(2) > strong').should('contain', 'Email address');
})

Then ('I can select those email addresses', () => {
    cy.contains(/bertram@/, {matchCase: true}).invoke('attr', 'style', 'color: red')
})
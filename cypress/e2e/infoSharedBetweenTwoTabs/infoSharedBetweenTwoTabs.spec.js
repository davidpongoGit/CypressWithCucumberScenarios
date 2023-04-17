import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

let productName;

Given ('FirstPhase', () => {
    cy.visit('https://www.google.com/shopping/product/r/GB/7131095748796453263?prds=oid:12774127038681622660,eto:12774127038681622660_0,epd:12774127038681622660,prmr:1,rsk:PC_3007646966133241060&rss=ChZQQ18zMDA3NjQ2OTY2MTMzMjQxMDYw&hl=en&sa=X&ved=2ahUKEwiJicfyp6_-AhVwLAYAHS93DCUQkLoIegQIAhBu');
    cy.get('#sg-product__pdp-container > div > div:nth-child(3) > div.YVQvvd > div > span')
    .invoke('text')
    .then(($title) => {
        productName = $title
    })
    cy.then(() => {
        cy.log(productName);
    })
})

When ('SecondPhase', () => {
    cy.get('#sg-product__pdp-container > div > div.PGjVzc > div:nth-child(3) > div > div:nth-child(3) > div > div > div.EvUzac > div > a')
    .invoke('removeAttr', 'target')
    .click();
    cy.url().should('contain', "https://www.vidaxl.co.uk/e/vidaxl-6-piece-garden-pallet-lounge-set-solid-pinewood-dark-grey/8720286276730.html")
})

Then ('ThirdPhase', () => {
    cy.get('#maincontent > div.container.product-detail.js-product-detail-page.product-wrapper > div:nth-child(4) > div.col-12.col-lg-5 > div > div.row > div.col > h1')
    .should('contain', productName);
})
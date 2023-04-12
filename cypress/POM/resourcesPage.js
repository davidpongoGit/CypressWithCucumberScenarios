class resourcesPage{
    get logo(){
        return cy.get('body > nav > a').should('contain', 'UITAP');
    }
    get homePageLink(){
        return cy.get('#navbarSupportedContent > ul > li.nav-item.active > a').should('contain', 'Home');
    }
    get resourcesPageLink(){
        return cy.get('#navbarSupportedContent > ul > li:nth-child(2) > a').should('contain', 'Resources');
    }
    get w3schoolsDotComLink(){
        return cy.get('body > section > div > ul:nth-child(3) > li:nth-child(1) > a').should('contain', 'w3schools.com');
    }
    get mdnLink(){
        return cy.get('body > section > div > ul:nth-child(3) > li:nth-child(2) > a').should('contain', 'MDN');
    }
    get learnRegexTheEasyWayLink(){
        return cy.get('body > section > div > ul:nth-child(3) > li:nth-child(3) > a').should('contain', 'Learn regex the easy way');
    }
    get devHintsDotIoPage(){
        return cy.get('body > section > div > ul:nth-child(3) > li:nth-child(4) > a').should('contain', 'devhints.io');
    }
    get W3CPage(){
        return cy.get('body > section > div > ul:nth-child(5) > li > a').should('contain', 'W3C');
    }
    get testPyramidPage(){
        return cy.get('body > section > div > ul:nth-child(7) > li:nth-child(1) > a').should('contain', 'Test Pyramid');
    }
    get whereDoOurFlakyTestsComeFromPage (){
        return cy.get('body > section > div > ul:nth-child(7) > li:nth-child(2) > a').should('contain', 'Where do our flaky tests come from?');
    }
    get ministryOfTestingPage(){
        return cy.get('body > section > div > ul:nth-child(9) > li:nth-child(1) > a').should('contain', 'Ministry of Testing');
    }
    get uTestPageLink(){
        return cy.get('body > section > div > ul:nth-child(9) > li:nth-child(2) > a').should('contain', 'uTest');
    }
    get softwareTestingHelpPage(){
        return cy.get('body > section > div > ul:nth-child(9) > li:nth-child(3) > a').should('contain', 'Software Testing Help');
    }
    get dZonePage(){
        return cy.get('body > section > div > ul:nth-child(9) > li:nth-child(4) > a').should('contain', 'DZone');
    }
    get stackOverflowPage(){
        return cy.get('body > section > div > ul:nth-child(9) > li:nth-child(5) > a').should('contain', 'StackOverflow');
    }
}
export default new resourcesPage();
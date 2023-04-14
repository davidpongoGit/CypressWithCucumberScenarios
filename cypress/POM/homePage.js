class homePage{
    get logo(){
        return cy.get('body > nav > a').should('contain', 'UITAP');
    }
    get homePageLink(){
        return cy.get('#navbarSupportedContent > ul > li.nav-item.active > a').should('contain', 'Home');
    }
    get resourcesPageLink(){
        return cy.get('#navbarSupportedContent > ul > li:nth-child(2) > a').should('contain', 'Resources');
    }
    get dynamicIdPage(){
        return cy.get('#overview > div > div:nth-child(1) > div:nth-child(1) > h3 > a').should('contain', 'Dynamic ID');
    }
    get classAttributePage(){
        return cy.get('#overview > div > div:nth-child(1) > div:nth-child(2) > h3 > a').should('contain', 'Class Attribute');
    }
    get hiddenLayersPage(){
        return cy.get('#overview > div > div:nth-child(1) > div:nth-child(3) > h3 > a').should('contain', 'Hidden Layers');
    }
    get loadDelaysPage(){
        return cy.get('#overview > div > div:nth-child(1) > div:nth-child(4) > h3 > a').should('contain', 'Load Delay');
    }
}
export default new homePage();
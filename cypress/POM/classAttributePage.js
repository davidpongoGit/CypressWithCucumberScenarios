class classAttributePage{
    get logo(){
        return cy.get('body > nav > a').should('contain', 'UITAP');
    }
    get homePageLink(){
        return cy.get('#navbarSupportedContent > ul > li.nav-item.active > a').should('contain', 'Home');
    }
    get resourcesPageLink(){
        return cy.get('#navbarSupportedContent > ul > li:nth-child(2) > a').should('contain', 'Resources');
    }
    get blueButton(){
        return cy.get('.class3');
    }
}
export default new classAttributePage();
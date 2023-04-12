class dynamicIdPage{
    get logo(){
        return cy.get('body > nav > a').should('contain', 'UITAP');
    }
    get homePageLink(){
        return cy.get('#navbarSupportedContent > ul > li.nav-item.active > a').should('contain', 'Home');
    }
    get resourcesPageLink(){
        return cy.get('#navbarSupportedContent > ul > li:nth-child(2) > a').should('contain', 'Resources');
    }
    get dynamicIdButton(){
        return cy.get('button:contains("Button with Dynamic ID")').first();
    }
}
export default new dynamicIdPage();
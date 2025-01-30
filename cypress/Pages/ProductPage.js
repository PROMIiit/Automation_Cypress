// productPage.js

class ProductPage {
    selectProductsPage() {
        cy.get('a[href="/products"]').should('be.visible').click(); 
        cy.wait(2000); 
      }
  
    selectMenCategoryAndJeans() {
      cy.get('.left-sidebar', { timeout: 10000 }).should('be.visible');
  
      cy.get('.left-sidebar')
        .contains('Men')
        .should('be.visible')
        .click({ force: true });
  
      cy.get('#Men.panel-collapse.in', { timeout: 5000 }) 
        .should('have.class', 'in');
  
      cy.get('#Men .panel-body ul')
        .contains('Jeans')
        .should('be.visible')
        .click();
    }
  }
  
  export default new ProductPage();
  
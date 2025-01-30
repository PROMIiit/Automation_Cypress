class ProductDetailPage {
    static visitPage(productId) {
      cy.visit(`/product_details/${productId}`);
    }
  
    static highlightProductLink() {
      cy.get('a[href="/product_details/1"]')
        .invoke('css', 'background-color', 'yellow')  
        .trigger('mouseover')  
        .click();
    }
  
    static changeQuantity(quantity) {
      cy.get('input#quantity')
        .invoke('css', 'border', '2px solid red')  
        .focus()
        .clear()
        .type(quantity);
    }
  
    static addToCart() {
      cy.get('.btn.btn-default.cart').click();
    }
  
    static verifyModal() {
      cy.get('#cartModal').should('be.visible');
      cy.get('.modal-body').should('contain', 'Your product has been added to cart.');
    }
  
    static viewCart() {
      cy.get('.modal-body a[href="/view_cart"]').click();
    }
  
    static verifyCartPage() {
      cy.url().should('include', '/view_cart');
    }
  
    static verifyCartQuantity(quantity) {
      cy.get('.cart_quantity button.disabled', { timeout: 6000 }).should('be.visible')
        .should('have.text', quantity);
    }
  }
  
  export default ProductDetailPage;
  
class CartPage {
  visit() {
    cy.visit('https://automationexercise.com/cart'); 
    cy.wait(2000); 
  }

  proceedToCheckout() {
    cy.get('a.btn.btn-default.check_out')
      .contains('Proceed To Checkout')
      .click();  
    cy.wait(2000);  
  }

  
  placeOrder() {
    cy.scrollTo('bottom');  
    cy.get('a[href="/payment"]')
      .contains('Place Order')
      .click();  
    cy.wait(2000);  
  }
}

export default new CartPage();

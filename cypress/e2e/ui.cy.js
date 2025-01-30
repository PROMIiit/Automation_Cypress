// cypress/integration/SignUpTest.spec.js

import SignUpPage from '../Pages/SignUpPage';
import ProductPage from '../Pages/ProductPage';
import ProductDetailPage from '../Pages/ProductDetailPage'  // Import the new page object
import CartPage from '../Pages/CartPage';
import ContactUsPage from '../Pages/ContactUs';



describe('User Sign Up Test', () => {

  //First Case
  beforeEach(() => {
    SignUpPage.visitHomePage();
  });

  it('should successfully complete the sign-up process', () => {
    SignUpPage.goToLoginPage();
    
    const name = 'Sanzida Promi';
    const email = 'promi1986@example.com';
    SignUpPage.enterNameAndEmail(name, email);
    cy.wait(1000); 

    SignUpPage.clickSignUp();
    cy.wait(1000); 

    const title = 'Mrs'; // or 'Mrs'
    const password = 'TestPassword123';
    const day = '27';
    const month = 'June';
    const year = '2000';
    SignUpPage.enterAccountInformation(title, name, email, password, day, month, year);
    cy.wait(1000);

    SignUpPage.checkNewsletterAndOffers();
    cy.wait(1000);

    const firstName = 'Sanzida';
    const lastName = 'Promi';
    const company = 'Alpha';
    const address1 = 'Sarishabari Jamalpur';
    const address2 = 'Jahanara Imam Hall, JU';
    const country = 'Canada';
    const state ='Dhaka';
    const city = 'Savar';
    const zipcode = '2050';
    const mobileNumber = '01766714301';
    SignUpPage.enterAddressInformation(firstName, lastName, company, address1, address2, country, state, city, zipcode, mobileNumber);
    cy.wait(500);

    SignUpPage.submitSignUpForm();
    cy.wait(500); 

    SignUpPage.verifyAccountCreated();
    cy.wait(500); 
    SignUpPage.clickContinueButton();
    cy.wait(500);

    cy.url().should('eq', 'https://automationexercise.com/');


//Second Case Try
  cy.get('a[href="/products"]').should('be.visible').click();  
  cy.wait(2000); 


cy.get('.left-sidebar').should('be.visible');


cy.get('.left-sidebar')
  .contains('Men')
  .then(($men) => {
    cy.wrap($men).scrollIntoView();
    cy.wrap($men).invoke('css', 'background-color', 'yellow'); 
    cy.wait(2000); 
    cy.wrap($men).click({ force: true });
    cy.wait(2000); 
  });

cy.get('#Men.panel-collapse.in', { timeout: 5000 }).should('exist');


cy.get('#Men a')
  .contains('Jeans')
  .then(($jeans) => {
    cy.wrap($jeans).invoke('css', 'border', '3px solid red'); 
    cy.wait(1500); 
    cy.wrap($jeans).click();
  });

cy.get('body').then(() => {
  cy.log('🛒 Navigating to Jeans page...');
});
// Third Case
 cy.visit('https://automationexercise.com/products');
  
 ProductDetailPage.highlightProductLink();
 cy.wait(2000);

 ProductDetailPage.changeQuantity('2');
 cy.wait(2000);

 cy.wait(1000); 
 ProductDetailPage.addToCart();

 ProductDetailPage.verifyModal();
 cy.wait(1000); 

 ProductDetailPage.viewCart();
 ProductDetailPage.verifyCartPage();

 ProductDetailPage.verifyCartQuantity('2');


// Fourth Case
 cy.visit('https://automationexercise.com/view_cart'); 

 cy.get('a.btn.btn-default.check_out')
   .contains('Proceed To Checkout')
   .click();  
 cy.wait(2000);  

 cy.scrollTo('bottom');
 cy.get('a[href="/payment"]')
   .contains('Place Order')
   .click();  
 cy.wait(2000);  

 cy.get('input[name="name_on_card"]').should('be.visible').type('Sanzida Promi');
 cy.wait(100);  
 cy.get('input[name="card_number"]').should('be.visible').type('4111111111111111');
 cy.wait(100); 
 cy.get('input[name="cvc"]').should('be.visible').type('123');
 cy.wait(100); 
 cy.get('input[name="expiry_month"]').should('be.visible').type('12');
 cy.wait(100);  
 cy.get('input[name="expiry_year"]').should('be.visible').type('2025');
 cy.wait(100); 

 cy.get('button[type="submit"]')
   .contains('Pay and Confirm Order')
   .click(); 
 cy.wait(2000); 

 cy.url().should('include', '/payment_done/1000');

 cy.get('a[href="/download_invoice/1000"]')
   .contains('Download Invoice')
   .click();  
 cy.wait(2000);  

 cy.get('a[data-qa="continue-button"]')
   .contains('Continue')
   .click();  
 cy.wait(2000);  

 // Fifth Case
     ContactUsPage.visit();
 
     ContactUsPage.fillForm('Sanzida Promi', 'promi@gmail.com', 'General Inquiry', 'I have a question regarding the service.');
 
     const filePath = '../fixtures/Promi_Sanzida.pdf';  
     ContactUsPage.attachFile(filePath);
 
     ContactUsPage.submitForm();
 
     ContactUsPage.clickHome();

  });
});




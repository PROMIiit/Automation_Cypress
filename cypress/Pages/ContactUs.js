// ContactUs.js (Page Object Model)

class ContactUsPage {
  visit() {
    cy.visit('https://automationexercise.com/contact_us');
  }

  fillForm(name, email, subject, message) {
    cy.get('input[name="name"]').should('be.visible').type(name);

    
    cy.get('input[name="email"]').should('be.visible').type(email);

    
    cy.get('input[name="subject"]').should('be.visible').type(subject);

    
    cy.get('textarea[name="message"]').should('be.visible').type(message);
  }

  attachFile(filePath) {
  
    cy.get('input[name="upload_file"]').should('be.visible').attachFile(filePath);
  }

  submitForm() {
    cy.get('input[type="submit"]').should('be.visible').click();
  }
  clickHome() {
    cy.get('a.btn.btn-success').should('be.visible').click();
  }
 
}

export default new ContactUsPage();

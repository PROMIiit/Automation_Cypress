class SignUpPage {
    static visitHomePage() {
        cy.visit('https://automationexercise.com'); 
    }

    static goToLoginPage() {
        cy.get('a[href="/login"]').click(); 
    }

    static enterNameAndEmail(name, email) {
        cy.get('input[data-qa="signup-name"]').type(name, { delay: 100 }); 
        cy.get('input[data-qa="signup-email"]').type(email, { delay: 100 });
    }

    static clickSignUp(email, password) {
        cy.get('button[data-qa="signup-button"]').click();
        
       
    }

    static enterAccountInformation(title, name, email, password, day, month, year) {
        if (title === 'Mr') {
            cy.get('#id_gender1').should('be.visible').wait(1000).check();
        } else if (title === 'Mrs') {
            cy.get('#id_gender2').should('be.visible').wait(1000).check(); 
        }

        cy.get('input[data-qa="password"]').type(password, { delay: 100 }); 
        cy.get('#days').select(day, { delay: 100 });  
        cy.get('#months').select(month, { delay: 100 });  
        cy.get('#years').select(year, { delay: 100 });  
    }

    static checkNewsletterAndOffers() {
        cy.get('#newsletter').check(); 
    
        cy.get('#optin').check(); 
    }

    static enterAddressInformation(firstName, lastName, company, address1, address2, country, state, city, zipcode, mobileNumber) {
        cy.get('input[data-qa="first_name"]').type(firstName, { delay: 100 });
        cy.get('input[data-qa="last_name"]').type(lastName, { delay: 100 });
        cy.get('input[data-qa="company"]').type(company, { delay: 100 });
        cy.get('input[data-qa="address"]').type(address1, { delay: 100 }); 
        cy.get('input[data-qa="address2"]').type(address2, { delay: 100 });
        cy.get('select[data-qa="country"]').select(country, { delay: 100 }); 
        cy.get('input[data-qa="state"]').type(state, { delay: 100 });
        cy.get('input[data-qa="city"]').type(city, { delay: 100 }); 
        cy.get('input[data-qa="zipcode"]').type(zipcode, { delay: 100 }); 
        cy.get('input[data-qa="mobile_number"]').type(mobileNumber, { delay: 100 }); 
    }

    static submitSignUpForm() {
        cy.get('button[data-qa="create-account"]').click(); 
    }

    static verifyAccountCreated() {
        cy.url().should('include', '/account_created'); 
    }

    static clickContinueButton() {
        cy.get('a[data-qa="continue-button"]').should('be.visible').click(); 
        cy.wait(2000); 
    }    
}

export default SignUpPage;

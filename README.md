# **Automation Exercise Tests**  
This project automates UI testing for the **[Automation Exercise](https://automationexercise.com/)** website using **Cypress**.

## **Features**
- End-to-end UI automation using Cypress  
- Covers user registration,product search and selection,product update and cart management, checkout process,payment and order confirm,contact us form submission
- Implements the Page Object Model (POM) for better maintainability  

## **Prerequisites**  
Ensure you have the following installed:  
- [Node.js](https://nodejs.org/) (Latest LTS version recommended)  
- [Cypress](https://www.cypress.io/)  

## **Setup & Installation**  
1. Clone the repository:  
   ```bash
   git clone https://github.com/PROMIiit/Automation_Cypress.git
   cd Automation_Cypress
## **Install Dependencies**  
Run the following command to install all required dependencies:  
```bash
npm install
cd automation-exercise
npx cypress open
npx cypress run  

## **Handling Unique Emails for Sign-Up Tests**
Since the sign-up process requires a unique email every time, follow these steps before running the test:

Open the ui.cy.js file located at
Go to line number 22 and update the email address with a new, unique email that has not been used before. Example:
Save the file and rerun the tests.




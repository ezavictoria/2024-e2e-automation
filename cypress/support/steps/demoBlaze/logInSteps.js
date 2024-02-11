import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import commonElements from "../../elements/demoBlaze/commonElements";
const CommonElements = new commonElements()

import logInElements from "../../elements/demoBlaze/logInElements";
const LogInElements = new logInElements()

Given("clicks on the log in link", () => {
  cy.get(LogInElements.logInLinkHeader()).click()
  cy.get(LogInElements.logInModalLabel()).should('be.visible')
});

When("fills in the log in form fields", () => {
  const username = Cypress.env('username')
  const password = Cypress.env('password')

  cy.get(LogInElements.logInUsernameField()).type(username)
  cy.get(LogInElements.logInPasswordField()).type(password, { log: false })
});

When("clicks on the log in button", () => {
  cy.get(LogInElements.logInConfirmBtn()).click()
});

Then("the log in must be successful", () => {
  const username = Cypress.env('username')
  cy.get(CommonElements.dbNameUserHeader()).should('have.text', `Welcome ${username}`);
});

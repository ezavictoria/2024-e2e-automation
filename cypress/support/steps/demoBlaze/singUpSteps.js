import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import commonElements from "../../elements/demoBlaze/commonElements";
const CommonElements = new commonElements()

import singUpElements from "../../elements/demoBlaze/singUpElements";
const SingUpElements = new singUpElements()

Given("the user accesses the DemoBlaze homepage", () => {
  cy.visit(CommonElements.dbHomePageUrl())
});

Given("clicks on the sing up link", () => {
  cy.get(SingUpElements.singUpLinkHeader()).click()
  cy.get(SingUpElements.singUpModalLabel()).should('be.visible')
});

When("fills in the sing up form fields", () => {
  const username = Cypress.env('username')
  const password = Cypress.env('password')

  cy.get(SingUpElements.singUpUsernameField()).type(username)
  cy.get(SingUpElements.singUpPasswordField()).type(password, { log: false })
});

When("clicks on the sing up button", () => {
  cy.get(SingUpElements.singUpConfirmBtn()).click()
});

Then("the sign up must be successful", () => {
  cy.validateAlert('This user already exist.')
  cy.get(CommonElements.dbLogoHeader()).should('be.visible')
});

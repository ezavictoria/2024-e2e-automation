import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import commonElements from "../../elements/demoBlaze/commonElements";
const CommonElements = new commonElements()

import singUpElements from "../../elements/demoBlaze/singUpElements";
const SingUpElements = new singUpElements()

const faker = require('faker')

Given("the user accesses the DemoBlaze homepage", () => {
  cy.visit(CommonElements.dbHomePageUrl())
});

Given("clicks on the sing up link", () => {
  cy.get(SingUpElements.singUpLinkHeader()).click()
  cy.get(SingUpElements.singUpModalLabel()).should('be.visible')
});

When("fills in the form fields", () => {
  const usernameRandom = faker.internet.userName()
  const passwordRandom = faker.internet.password()

  cy.get(SingUpElements.singUpUsernameField()).type(usernameRandom, { log: false })
  cy.get(SingUpElements.singUpPasswordField()).type(passwordRandom, { log: false })

  Cypress.env('username', usernameRandom)
  Cypress.env('password', passwordRandom)
});

When("clicks on the sing up button", () => {
  cy.get(SingUpElements.singUpConfirmBtn()).click()
});

Then("the sign up must be successful", () => {
  cy.validateAlert('Sign up successful.')
  cy.get(CommonElements.dbLogoHeader()).should('be.visible')
});

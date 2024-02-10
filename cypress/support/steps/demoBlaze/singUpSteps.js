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
  cy.get(SingUpElements.singUpModalLabel()).should("be.visible")
});

When("fills in the form fields", () => {
  const usernameRandom = faker.name.firstName()
  const passwordRandom = faker.internet.password()

  cy.get(SingUpElements.singUsernameField()).type(usernameRandom, { log: false })
  cy.get(SingUpElements.singPasswordField()).type(passwordRandom, { log: false })

  Cypress.env('username', usernameRandom)
  Cypress.env('password', passwordRandomRandom)
});

When("clicks on the sing up button", () => {
  cy.contains('button', 'Sing Up').click()
});

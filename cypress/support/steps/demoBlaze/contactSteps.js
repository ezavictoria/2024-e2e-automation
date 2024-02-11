import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import commonElements from "../../elements/demoBlaze/commonElements";
const CommonElements = new commonElements()

import contactElements from "../../elements/demoBlaze/contactElements";
const ContactElements = new contactElements()

Given("clicks on the contact link", () => {
  cy.get(ContactElements.contactLinkHeader()).click()
  cy.get(ContactElements.contactModalLabel()).should('be.visible')
});

When("fills in the contact form fields", () => {
  const email = Cypress.env('email')
  const name = Cypress.env('name')

  cy.wait(1000)
  cy.get(ContactElements.contactEmailField()).type(email)
  cy.get(ContactElements.contactNameField()).type(name)
  cy.get(ContactElements.contactMessageField()).type('Contact test message')
});

When("clicks on the contact button", () => {
  cy.get(ContactElements.contactConfirmBtn()).click()
});

Then("the contact must be successful", () => {
  cy.validateAlert('Thanks for the message!!')
});
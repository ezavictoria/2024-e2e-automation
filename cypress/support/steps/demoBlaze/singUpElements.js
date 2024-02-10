import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import commonElements from "../../elements/demoBlaze/commonElements";
const CommonElements = new commonElements

import singUpElements from "../../elements/demoBlaze/singUpElements";
const SingUpElements = new singUpElements

Given("the user accesses the DemoBlaze homepage", () => {
  cy.visit(CommonElements.dbHomePageUrl());
});

Given("clicks on the sing up button", () => {
  cy.get(SingUpElements.singUpLinkHeader()).click()
  cy.get(SingUpElements.singUpModalLabel()).should('be.visible')
})


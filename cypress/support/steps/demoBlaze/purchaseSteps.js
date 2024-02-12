import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import commonElements from "../../elements/demoBlaze/commonElements";
const CommonElements = new commonElements()

import purchaseElements from "../../elements/demoBlaze/purchaseElements";
const PurchaseElements = new purchaseElements()

Given("the user add a smartphone at the cart", () => {
  cy.get(PurchaseElements.phoneLinkInMenu()).click()
  cy.getTextLast(PurchaseElements.firstItemInList(), 'smartphoneName')
  cy.get(PurchaseElements.firstItemInList()).last().click()
  cy.get(PurchaseElements.phoneAddToCart()).click()

  cy.validateAlert('Product added')
});

Given("fills purchase form and confirm", () => {
    const name = Cypress.env('name')

    cy.get(CommonElements.dbCartHeader()).click()
    cy.get(PurchaseElements.placeOrderButton()).click()

    cy.wait(1000)
    cy.get(PurchaseElements.nameField()).type(name)
    cy.get(PurchaseElements.countryField()).type('Brazil')
    cy.get(PurchaseElements.cityField()).type('Sao Paulo')
    cy.get(PurchaseElements.cardField()).type('12345678')
    cy.get(PurchaseElements.monthField()).type('12')
    cy.get(PurchaseElements.yearField()).type('2023')
  });

  Given("the purchase must be successful", () => {
    cy.get(PurchaseElements.confirmButton()).click()
    cy.get(PurchaseElements.confirmationMsg()).last().should('have.text','Thank you for your purchase!')
});
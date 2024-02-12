Cypress.Commands.add('validateAlert', (message) => {
    cy.on('window:alert',(txt)=>{
        expect(txt).to.contains(message);
      })
  })

Cypress.Commands.add('getTextLast', (element, textLabel) => {
  cy.get(element)
    .invoke('text')
    .then(text => {
      Cypress.env(textLabel, text)
    })
});

  
  
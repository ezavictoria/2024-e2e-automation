Cypress.Commands.add('validateAlert', (message) => {
    cy.on('window:alert',(txt)=>{
        expect(txt).to.contains(message);
      })
  })

  
  
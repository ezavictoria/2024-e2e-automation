// Import commands.js using ES2015 syntax:
import './commands'
import './commands/commonCommands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

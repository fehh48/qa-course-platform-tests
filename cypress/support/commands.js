Cypress.Commands.add('loginFake', () => {
  cy.visit('public/login.html')
  cy.get('#login-button').click()
})

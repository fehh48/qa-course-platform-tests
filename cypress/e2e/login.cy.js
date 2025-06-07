// cypress/e2e/login.cy.js

describe('Login de usuário', () => {
  it('Deve exibir mensagem de boas-vindas após login', () => {
    cy.visit('public/login.html')
    cy.get('#login-button').click()
    cy.contains('Bem-vindo!')
  })
})

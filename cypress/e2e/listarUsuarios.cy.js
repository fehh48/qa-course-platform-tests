describe('Listagem de usuários', () => {
  beforeEach(() => {
    cy.visit('/public/lista-usuarios.html');
  });

  it('Deve exibir usuários cadastrados na lista', () => {
    cy.intercept('GET', 'http://127.0.0.1:3000/usuarios').as('getUsuarios');

    cy.wait('@getUsuarios');

    cy.get('#lista-usuarios li', { timeout: 6000 }).should(($lis) => {
      expect($lis.length).to.be.greaterThan(0);
    });

    cy.get('#lista-usuarios li').first().should('contain', 'Felipe');
  });
});

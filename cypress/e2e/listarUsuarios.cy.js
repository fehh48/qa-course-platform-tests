describe('Listagem de usuários', () => {
  it('Deve exibir usuários cadastrados na lista', () => {
    // Faz o intercept ANTES de visitar
    cy.intercept('GET', '**/usuarios').as('getUsuarios');

    // Simula login como admin ANTES da página carregar
    cy.visit('/public/lista-usuarios.html', {
      onBeforeLoad(win) {
        win.localStorage.setItem('usuarioLogado', JSON.stringify({
          nome: 'Felipe',
          email: 'felipe@qa.com',
          role: 'admin'
        }));
      }
    });

    // Aguarda a chamada GET
    cy.wait('@getUsuarios');

    // Valida se a lista foi carregada
    cy.get('#lista-usuarios li', { timeout: 6000 }).should(($lis) => {
      expect($lis.length).to.be.greaterThan(0);
    });

    cy.get('#lista-usuarios li').first().should('contain', 'Felipe');
  });
});

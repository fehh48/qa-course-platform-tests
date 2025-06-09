describe('Controle de acesso por role', () => {
  it('Deve bloquear acesso a /lista-usuarios.html para usuário aluno', () => {
    const aluno = {
      nome: 'Lucas',
      email: 'lucas@qa.com',
      role: 'aluno'
    };

    // Define localStorage antes de visitar
    cy.visit('/public/lista-usuarios.html', {
      onBeforeLoad(win) {
        win.localStorage.setItem('usuarioLogado', JSON.stringify(aluno));
      }
    });

    // Valida o alerta
    cy.on('window:alert', (txt) => {
      expect(txt).to.include('Acesso negado');
    });

    // Espera o redirecionamento acontecer
    cy.wait(1000); // aguarda o redirect automático acontecer

    // Verifica se caiu no login
    cy.url().should('include', '/login.html');
  });
});

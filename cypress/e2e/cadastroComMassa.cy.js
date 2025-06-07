describe('Cadastro com múltiplos usuários usando fixture e intercept', () => {
  beforeEach(() => {
    // Simulando a resposta da API ao cadastrar
    cy.intercept('POST', '/api/usuarios', {
      statusCode: 201,
      body: { mensagem: 'Usuário criado com sucesso!' }
    }).as('postUsuario');

    // Acessando a página HTML de cadastro
    cy.visit('/public/cadastro.html');
  });

  it('Deve cadastrar todos os usuários da fixture e validar a resposta da API', () => {
    cy.fixture('usuarios').then((usuarios) => {
      usuarios.forEach((usuario) => {
        // Preencher o formulário
        cy.get('#nome').clear().type(usuario.nome);
        cy.get('#email').clear().type(usuario.email);
        cy.get('#senha').clear().type(usuario.senha);
        cy.get('#botao-cadastrar').click();

        // Esperar a resposta da API mockada
        cy.wait('@postUsuario').its('response.statusCode').should('eq', 201);

        // Validar a mensagem de sucesso
        cy.contains('Cadastro realizado com sucesso').should('be.visible');

        // Esconde a mensagem pra repetir o processo
        cy.get('#mensagem-sucesso').invoke('hide');
      });
    });
  });
});

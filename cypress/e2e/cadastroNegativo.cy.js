describe('Testes negativos do cadastro', () => {
  beforeEach(() => {
    cy.visit('/public/cadastro.html');
  });

  it('Campos vazios - alerta visível', () => {
    cy.on('window:alert', (msg) => {
      expect(msg).to.equal('Por favor, preencha todos os campos obrigatórios');
    });
    cy.get('#botao-cadastrar').click();
  });

  it('Email inválido', () => {
    cy.get('#nome').type('Felipe');
    cy.get('#email').type('emailinvalido');
    cy.get('#senha').type('123456');
    cy.get('#botao-cadastrar').click();

    cy.contains('Formato de email inválido').should('be.visible');
  });

  it('Senha curta', () => {
    cy.get('#nome').type('Felipe');
    cy.get('#email').type('felipe@qa.com');
    cy.get('#senha').type('123');
    cy.get('#botao-cadastrar').click();

    cy.contains('A senha deve ter pelo menos 6 caracteres').should('be.visible');
  });

  it('Usuário duplicado', () => {
    const usuario = {
      nome: 'Felipe Batista',
      email: 'felipe@test.com',
      senha: '123456'
    };

    // Primeiro cadastro
    cy.request('POST', 'http://localhost:3000/usuarios', usuario);

    // Tentativa duplicada
    cy.visit('/public/cadastro.html');
    cy.get('#nome').type(usuario.nome);
    cy.get('#email').type(usuario.email);
    cy.get('#senha').type(usuario.senha);
    cy.get('#botao-cadastrar').click();

    cy.contains('Usuário já cadastrado').should('be.visible');
  });
});

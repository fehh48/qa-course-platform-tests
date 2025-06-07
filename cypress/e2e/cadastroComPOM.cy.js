import { cadastroPage } from '../support/pages/cadastroPage';

describe('Cadastro com POM e fixture', () => {
  beforeEach(() => {
    cadastroPage.visitar();
  });

  it('Deve cadastrar usuários da fixture com intercept', () => {
    cy.intercept('POST', 'http://localhost:3000/usuarios', {
      statusCode: 201,
      body: { mensagem: 'Usuário criado com sucesso!' }
    }).as('postUsuario');

    cy.fixture('usuarios').then((usuarios) => {
      usuarios.forEach((usuario) => {
        cadastroPage.preencherNome(usuario.nome);
        cadastroPage.preencherEmail(usuario.email);
        cadastroPage.preencherSenha(usuario.senha);
        cadastroPage.clicarCadastrar();

        cy.wait('@postUsuario').its('response.statusCode').should('eq', 201);

        cadastroPage.validarMensagemSucesso();
        cadastroPage.esconderMensagem();
      });
    });
  });
});

class CadastroPage {
  visitar() {
    cy.visit('/public/cadastro.html');
  }

  preencherNome(nome) {
    cy.get('#nome').clear().type(nome);
  }

  preencherEmail(email) {
    cy.get('#email').clear().type(email);
  }

  preencherSenha(senha) {
    cy.get('#senha').clear().type(senha);
  }

  clicarCadastrar() {
    cy.get('#botao-cadastrar').click();
  }

  validarMensagemSucesso() {
    cy.contains('Cadastro realizado com sucesso').should('be.visible');
  }

  esconderMensagem() {
    cy.get('#mensagem-sucesso').invoke('hide');
  }
}

export const cadastroPage = new CadastroPage(); // Exporta para usar nos testes

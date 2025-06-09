describe('Testes da API de Usuários', () => {
  const url = 'http://localhost:3000/usuarios';

  beforeEach(() => {
    // Resetando o banco antes de cada teste
    cy.exec('node reset-db.js').then(() => {
    cy.wait(3000); // espera meio segundo pra garantir
  });
  });

  it('Deve cadastrar um novo usuário com sucesso', () => {
    const novoUsuario = {
      nome: 'Felipe API',
      email: 'felipeapi@test.com',
      senha: '123456'
    };

    cy.request('POST', url, novoUsuario).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      expect(response.body.nome).to.eq(novoUsuario.nome);
    });
  });

  it('Deve retornar todos os usuários cadastrados', () => {
    cy.request('GET', url).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
    });
  });

  it('Não deve permitir cadastro de usuário com email duplicado', () => {
    const usuario = {
      nome: 'Felipe Repetido',
      email: 'duplicado@test.com',
      senha: '123456'
    };

    // Primeiro cadastro
    cy.request('POST', url, usuario).its('status').should('eq', 201);

    // Tentativa duplicada deve retornar 400
    cy.request({
      method: 'POST',
      url,
      body: usuario,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('erro', 'Usuário já cadastrado');
    });
  });

  it('Deve deletar um usuário por ID', () => {
    const usuario = {
      nome: 'Felipe Delete',
      email: 'delete@test.com',
      senha: '123456'
    };

    cy.request('POST', url, usuario).then((res) => {
      const id = res.body.id;

      cy.request('DELETE', `${url}/${id}`).then((deleteRes) => {
        expect(deleteRes.status).to.eq(200);
      });
    });
  });
});

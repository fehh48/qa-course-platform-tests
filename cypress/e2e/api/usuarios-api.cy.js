describe('API - Criação de Usuário', () => {
  it('Deve criar um novo usuário com sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/users',
      body: {
        name: 'Felipe Batista',
        email: 'felipe@test.com',
        username: 'felipinho'
      },
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).should((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
    });
  });
});

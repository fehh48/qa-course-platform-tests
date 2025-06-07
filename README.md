
# 📚 QA Course Platform Tests

Este projeto simula testes End-to-End (E2E) de uma plataforma fictícia de cursos utilizando **Cypress**, **JSON Server** e HTML estático.  
Ele foi desenvolvido com o objetivo de praticar automação de testes, estruturação de projeto e simulação de um ambiente real de QA.

---

## 🔧 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) – Testes E2E automatizados
- [JSON Server](https://github.com/typicode/json-server) – API fake REST para simular backend
- HTML, CSS e JavaScript – Interface simples de cadastro e listagem

---

## 📁 Estrutura do Projeto

qa-course-platform-tests/
├── cypress/
│ ├── e2e/
│ │ ├── cadastroUsuario.cy.js
│ │ └── listarUsuarios.cy.js
│ ├── fixtures/
│ │ └── usuarios.json
│ └── support/
│ ├── commands.js
│ └── pages/
│ └── CadastroPage.js
├── public/
│ ├── cadastro.html
│ └── lista-usuarios.html
├── db.json
├── cypress.config.js
└── package.json


---

## 🚀 Como Rodar Localmente

### 1. Instale as dependências
```bash
npm install

### 2. Inicie o JSON Server (porta 3000)
bash
Copiar
Editar
npx json-server --watch db.json --port 3000 --host 127.0.0.1
### 3. Inicie um servidor local (porta 5500)
Use o Live Server do VSCode ou:

bash
Copiar
Editar
npx http-server ./public -p 5500

### 4. Rode os testes com Cypress
bash
Copiar
Editar
npx cypress open

✅ Funcionalidades testadas
Cadastro de usuário com POM (Page Object Model)

Validação de campos

Listagem de usuários a partir da API fake

Interceptação e validação de chamadas com cy.intercept()

Testes automatizados baseados em dados do fixtures

💡 Objetivo do Projeto
Este repositório foi criado com fins educacionais, como parte do meu processo de aprendizado contínuo em QA.
Ele simula situações reais de problemas como:

Erros de CORS

Conflitos de rota entre frontend e backend fake

Configuração de ambiente Cypress com múltiplas origens

🔗 Me acompanhe
Se quiser acompanhar mais da minha jornada:

LinkedIn

GitHub

🧪 Próximos passos
Testes de login com autenticação fake

Validação de erros e mensagens na UI

Integração com GitHub Actions para CI/CD
document.getElementById('form-cadastro').addEventListener('submit', function (event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();
  const erros = document.getElementById('erros');
  const sucesso = document.getElementById('mensagem-sucesso');

  erros.innerHTML = '';
  sucesso.style.display = 'none';

  const emailValido = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  if (!nome || !email || !senha) {
    alert('Por favor, preencha todos os campos obrigatórios');
    return;
  }

  if (!emailValido.test(email)) {
    erros.innerHTML = '<p class="erro">Formato de email inválido</p>';
    return;
  }

  if (senha.length < 6) {
    erros.innerHTML = '<p class="erro">A senha deve ter pelo menos 6 caracteres</p>';
    return;
  }

  fetch(`http://localhost:3000/usuarios?email=${encodeURIComponent(email)}`)
    .then(res => res.json())
    .then(usuarios => {
      if (usuarios.length > 0) {
        erros.innerHTML = '<p class="erro">Usuário já cadastrado</p>';
        return;
      }

      fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, senha })
      })
        .then(() => {
          sucesso.style.display = 'block';
        });
    });
});

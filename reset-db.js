const fs = require('fs');

fs.copyFile('template-db.json', 'db.json', (err) => {
  if (err) {
    console.error('Erro ao resetar o banco:', err);
  } else {
    console.log('✅ Banco de dados resetado com sucesso!');
  }
});
 
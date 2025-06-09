const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Middleware para bloquear e-mails duplicados
server.post('/usuarios', (req, res, next) => {
  const db = router.db; // lowdb instance
  const existe = db.get('usuarios').find({ email: req.body.email }).value();

  if (existe) {
    return res.status(400).json({ erro: 'Usuário já cadastrado' });
  }

  next();
});

server.use(router);
server.listen(3000, () => {
  console.log('🚀 JSON Server rodando com validação de e-mail duplicado');
});

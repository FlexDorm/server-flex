const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Ruta al archivo JSON de datos

const middlewares = jsonServer.defaults();

// Verificar si estamos en el entorno de desarrollo local
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 4000; // Usar un puerto diferente en desarrollo
  server.use(middlewares);
  server.use(router);

  server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
  });
}
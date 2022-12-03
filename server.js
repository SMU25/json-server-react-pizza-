const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router("db.json");
const port = 3001;

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/pizzaItems/:id/": "/:id",
  })
);
server.use(router);
server.listen(port);

// Export the Server API
module.exports = server;

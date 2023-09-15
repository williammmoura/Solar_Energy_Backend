const { Router } = require("express");
const { routesFromGeracao } = require("./geracao.routes");
const { routesFromUsuario } = require("./usuario.routes");
const routes = new Router();

routes.use("/api/v1", [routesFromGeracao()]);
routes.use("/api/v1", [routesFromUsuario()]);

module.exports = routes;
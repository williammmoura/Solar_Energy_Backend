const { Router } = require("express");
const { routesFromGeracao } = require("./geracao.routes");

const routes = new Router();

routes.use("/api", [routesFromGeracao()]);

module.exports = routes;

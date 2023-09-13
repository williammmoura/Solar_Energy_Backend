const { Router } = require("express");
const { routesFromGeracao } = require("./geracao.routes");

const routes = Router();

routes.use("/", [routesFromGeracao()]);

module.exports = routes;

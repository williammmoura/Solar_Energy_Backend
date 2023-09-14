/*
 * Arquivo para enviar todas as rotas
 */

const { Router } = require("express");
const { routesFromUsuario } = require("./usuario.routes");


const routes = new Router();

routes.use("/api/v1", [
    routesFromUsuario()
]);

module.exports = routes;

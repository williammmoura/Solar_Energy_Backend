const {
  criarGeracao,
  obterGeracao,
} = require("../controllers/geracao.controller");
const { Router } = require("express");

class GeracaoRouter {
  routesFromGeracao() {
    const geracaoRouter = Router();
    geracaoRouter.post("/geracao", criarGeracao);
    geracaoRouter.get("/geracao/:id", obterGeracao);

    return geracaoRouter;
  }
}

module.exports = new GeracaoRouter();

const { Geracao } = require("../models/geracao");

class GeracaoController {
  async criarGeracao(req, res) {
    try {
      const { data_geracao, total_kw } = req.body;

      const newGeracao = await Geracao.create({
        data_geracao,
        total_kw,
      });

      return res.status(201).send(newGeracao);
    } catch (error) {
      return res.status(400).send({
        message: "Não foi possível criar uma nova geração!",
        cause: error.message,
      });
    }
  }

  async getGeracao(req, res) {
    const { id } = req.params;

    try {
      const geracao = await Geracao.findByPk(id);

      if (!geracao) {
        return res.status(404).send({
          message: "Geração não encontrada!",
        });
      }

      return res.status(200).send(geracao);
    } catch (error) {
      return res.status(400).send({
        message: "Não foi possível encontrar a geração!",
        cause: error.message,
      });
    }
  }
}

module.exports = new GeracaoController();

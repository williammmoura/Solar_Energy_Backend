const { STRING, DATE } = require("sequelize");
const { connection } = require("../database/connection");

const Geracao = connection.define(
  "geracao",
  {
    data_geracao: {
      type: DATE,
    },

    total_kw: {
      type: STRING,
    },
  },
  { underscored: true }
);

module.exports = { Geracao };

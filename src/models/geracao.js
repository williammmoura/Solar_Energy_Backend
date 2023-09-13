const { STRING, DATE } = require("sequelize");
const { connection } = require("../database/connection");

const Geracao = connection.define(
  "geracao",
  {
    dataGeracao: {
      type: DATE,
    },

    totalKw: {
      type: STRING,
    },
  },
  { underscored: true }
);

module.exports = { Geracao };

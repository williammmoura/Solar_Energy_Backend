const { STRING, DATE } = require("sequelize")
const { connection } = require("../database/connection")

const Usuario = connection.define("usuario", {
    nome: {
        type: STRING,
        allowNull: false
    },

    email: {
        type: STRING,
        unique: {
            msg: "Este e-mail já está cadastrado."
        },
        validate: {
            isEmail: {
                args: true,
                msg: "Forneça um e-mail válido!"
            },
        },
    },

    senha: {
        type: STRING,
        allowNull: false
    },

    created_at: DATE,
    update_at: DATE,

}, { underscored: true })

module.exports = { Usuario }
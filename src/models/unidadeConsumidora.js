const { Sequelize, BOOLEAN } = require('sequelize');
const { connection } = require('../database/connection.settings');

const UnidadeConsumidora = connection.define('UnidadeConsumidora', {
    unidadeconsumidora_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: User,
            key: 'id'
        }
    },
    apelido: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    marca: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    modelo:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
}, { underscored: true });

module.exports = {
    UnidadeConsumidora,
};
const { Sequelize, BOOLEAN } = require('sequelize');
const { usuario } = require('./usuario')
const { connection } = require('../database/connection');
const unidadeConsumidora = require('../controllers/unidadeConsumidora');

const UnidadeConsumidora = connection.define('UnidadeConsumidora', {
    unidadeconsumidora_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: usuario,
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
    modelo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
}, { underscored: true });

unidadeConsumidora.associate = (models) => {
    unidadeConsumidora.belongsTo(models.usuario, {
        foreignKey: 'user_id',
        allowNull: false
    });
};

module.exports = {
    UnidadeConsumidora,
};
const { listarUnidadeConsumidora } = require('../controllers/unidadeConsumidora');
const { Router } = require('express');
const { auth } = require('../middleware/auth');

class unidadeConsumidoraRouterC {
    unidadeConsumidoraRoutesF() {
        const unidadeConsumidoraRoutesV = Router();
        unidadeConsumidoraRoutesV.get('/api/v1/unidade', listarUnidadeConsumidora);
        return unidadeConsumidoraRoutesV;
    }
}

module.exports = new unidadeConsumidoraRouterC()

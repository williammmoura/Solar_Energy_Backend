const { listarUnidadeConsumidora } = require('../controllers/unidadeConsumidora')
const { Router } = require('express')
const { auth } = require('../middleware/auth')

class unidadeConsumidoraRouter{
    unidadeConsumidoraRoutes(){
        const unidadeConsumidoraRoutes = Router()
        unidadeConsumidoraRoutes.get('/api/v1/unidade', auth, listarUnidadeConsumidora)
        return unidadeConsumidoraRoutes
    }
}

module.exports = new unidadeConsumidoraRouter
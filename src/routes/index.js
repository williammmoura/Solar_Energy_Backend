const { Router } = require('express')
const { unidadeConsumidoraRoutesF } = require('../routes/unidadeConsumidora')

const routes = new Router()

routes.use('/app', [
    unidadeConsumidoraRoutesF()
])

module.exports = routes
const { UnidadeConsumidora } = require('../models/unidadeConsumidora')

class unidadeConsumidoraController{
    async listarUnidadeConsumidora(request, response){
        try {
            const { status } = request.query
    
            let list = {}
    
            if (status){
                list = { status }
            }
    
            const unidadeConsumidora = await UnidadeConsumidora.findAll({
                where: list,
            })
            return response.status(200).send(unidadeConsumidora)
        } catch (error) {
            return response.status(400).send({ message: 'Não foi possível listar os depósitos.' })
        }
    }
}

module.exports = new unidadeConsumidoraController()
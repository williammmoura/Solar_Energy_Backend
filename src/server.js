const express = require('express')
const cors = require('cors')
const routes = require('./routes/index')
const { connection } = require('./database/connection')

class Server {
    constructor(server = express()) {
        this.database()
        this.middleware(server)
        this.routesUse(server)
        this.initServer(server)
    }

    async initServer(app) {
        const PORT = 5000

        app.listen(PORT, () => console.log(`Server está rodando na porta ${PORT}`))
    }

    async middleware(app) {
        app.use(cors())
        app.use(express.json())
    }

    async database() {
        try {
            await connection.authenticate();
            console.log('Conexão bem sucedida!');
        } catch (error) {
            console.error('Não foi possível conectar no banco de dados.', error);
            throw error
        }
    }

    async routesUse(app) {
        app.use(routes)
    }
}

new Server()

module.exports = { Server }
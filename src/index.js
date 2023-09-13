const express = require('express') 
const cors = require('cors') 
const { connection } = require('./database/connection.settings')

const app = express() 
const PORT = 3333 
app.use(cors()) 
app.use(express.json())
app.listen(PORT, () => console.log(`Servidor executando na porta ${PORT}`))
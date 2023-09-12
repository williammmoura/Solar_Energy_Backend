const { config } = require('dotenv')
config() 

const { DIALECT, USERNAMEDB, PASSWORDDB, DATABASE, PORT, LOCALHOST } = process.env

module.exports = {
    dialect: DIALECT,
    username: USERNAMEDB,
    password: PASSWORDDB,
    database: DATABASE,
    port: PORT,
    host: LOCALHOST,
    define: {
        underscoreAll: true
    }
}
const { listaUsuario, criarUsuario, atualizarUsuario, deletarUsuario } = require("../controllers/usuario.controller")
const { Router } = require("express")

class UsuarioRouter {
    routesFromUsuario(){
        const usuarioRoutes = Router()

        usuarioRoutes.get("/usuario", listaUsuario)
        usuarioRoutes.post("/usuario", criarUsuario)
        usuarioRoutes.put("/usuario/:id", atualizarUsuario)
        usuarioRoutes.delete("/usuario/:id", deletarUsuario)

        return usuarioRoutes
    }
}

module.exports = new UsuarioRouter()
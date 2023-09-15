const { Usuario } = require("../models/usuario")

class UsuarioController {

    async criarUsuario(req, res) {
        try{
            const { 
                nome, 
                email, 
                senha 
            } = req.body

            //Lógica para ver se as informações obrigatórias estão preenchidas.
            if (!nome || !email || !senha) {
                return res.status(400).json({
                    "message": "As informações obrigatórias devem ser preenchidas"
                })
            }

            //Verificar se o email já está cadastrado no DB.
            const existeUsuario = await Usuario.findOne({
                where: {
                    email
                }
            })

            if(existeUsuario) {
                return res.status(403).json({
                    "message": "O email já está cadastrado."
                })
            }
            
            //Verificar se o email está em formato válido
            console.log(nome, email, senha)
            const novoUsuario = await Usuario.create({
                nome,
                email,
                senha
            })
            
            return res.status(201).json(novoUsuario)
        }catch (error){
            return res.status(500).json({
                "message": "Erro ao criar usuário",
                "cause": error.message
            })
        }
    }

    async listaUsuario(req, res) {
        try{
            //Lógica para listar usuários
            const usuario = await Usuario.findAll()
            return res.status(200).json(usuario)
        }catch (error){
            return res.status(500).json({
                "message": "Erro ao listar usuários",
                "cause": error.message
            })
        }
    }

    async atualizarUsuario(req, res){
        try{
            const { id } = req.params
            const { 
                nome, 
                email, 
                senha 
            } = req.body

            console.log(id)
            //Verificar se o "id" é válido
            if (isNaN(id)){
                return res.status(400).json({
                    "message": "ID inválido"
                })
            }

            //Verificar se o usuário existe
            const usuario = await Usuario.findByPk(id);
            
            console.log(usuario)    

            if(!usuario){
                return res.status(400).json({
                    "message": "Usuário não encontrado"
                })
            }

            //Atualizar os campos não vazios
            if(nome){
                usuario.nome = nome
            }

            if(email){
                usuario.email = email
            }

            if(senha){
                usuario.senha = senha
            }
            
            await usuario.save()

            return res.status(200).json(usuario)
        }catch(error){
            return res.status(500).json({
                "message": "Erro ao atualizar o usuário",
                "cause": error.message
            })
        }
    }

    async deletarUsuario(req, res){
        try{
            const { id } = req.params

            if(isNaN(id)) {
                return res.status(400).json({
                    "message": "ID inválido."
                })
            }

            const usuario = await Usuario.findByPk(id)

            if(!usuario){
                return res.status(400).json({
                    "message": "Usuário não encontrado."
                })
            }

            await usuario.destroy()

            return res.status(204).send()
        }catch (error){
            return res.status(500).json({
                "message": "Erro ao deletar usuário.",
                "cause": error.message
            })
        }
    }

    async loginUsuario(req, res){
        try{
            const { email, senha } = req.body

            const existeUsuario = await Usuario.findOne({
                where: {
                    email
                }
            })

            if(!existeUsuario){
                return res.status(404).json({
                    "message": "Usuário não encontrado"
                })
            }

            if(existeUsuario.senha !== senha){
                return res.status(401).json({
                    "message": "Senha incorreta"
                })
            }
            
            //Gerar token JWT para autenticação do usuário
            //Usar a lib. JWT

            return res.status(200).json({
                "message": "Login autorizado."
            })
        }catch (error){
            return res.status(500).json({
                "message": "Erro ao realizar o login",
                "cause": error.message
            })
        }
    }
}

module.exports = new UsuarioController()
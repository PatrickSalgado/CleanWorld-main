const usuarioService = require("../service/usuario.js");

async function getAllusuario(req, res){
    try{
        const rows = await userService.getAllusuario();

        res.status(200).json(rows);
    } catch(error){
        res.status(500).send({
            message: "error getting users",
            body: error.message,
        })
    }
}

async function createUsuario(req, res){
    const {nome,cpf,endereco,telefone,email,tipoCadastro} = req.body;

    try{
        await userService.createUsuario(nome,cpf,endereco,telefone,email,tipoCadastro);

        res.status(201).json({message:"Sucess"});

    }catch(error){
        res.status(500).send({
            message:"Error adding user! ",
            body: error.message,
        });

    }
}

async function updateUsuario(req, res){
    try{
        const{id}=req.params;
        const{nome,cpf,endereco,telefone,email,tipoCadastro}=req.params;

        await userService.updateUsuario(nome,cpf,endereco,telefone,email,tipoCadastro);

        res.status(204).json("Sucess");
    }catch(error){
        res.status(500).send({
            message: "Error updating user!",
            body: error.message,
        })
    }
}

module.exports = {
    getAllusuario,
    createUsuario,
    updateUsuario
};
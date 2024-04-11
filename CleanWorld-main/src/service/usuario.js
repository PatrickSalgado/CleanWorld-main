const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function getAllusuario(){
    const connection = await mysql.createConnection(databaseConfig);

    const [rows] = await connection.query("SELECT * FROM usuario");

    await connection.end();

    return rows;

};

async function createUsuario(idUsuario,nome,cpf,endereco,telefone,email,tipoCadastro){
    const connection = await mysql.createConnection(databaseConfig);

    const insertcoletor = "insert into coletor(idUsuario,nome,cpf,endereco,telefone,email,tipoCadastro) values (?,?,?,?,?,?,?)";

    await connection.query(insertcoletor,[idUsuario,nome,cpf,endereco,telefone,email,tipoCadastro])

    await connection.end();
}


async function updateUsuario(id,nome,cpf,endereco,telefone,email,tipoCadastro){
    
    const connection = await mysql.createConnection(databaseConfig);  
    
    const updateUsuario = "UPDATE usuario SET nome = ?, cpf = ?, endereco = ?, telefone = ?, email = ? , tipoCadastro = ? where id = ?" ;
    
    await connection.query(updateUsuario[id,nome,cpf,endereco,telefone,email,tipoCadastro]);
    
    await connection.end();

};

async function deleteUsuario(id){
    const connection = await mysql.createConnection(databaseConfig);

    await connection.query("DELETE FROM usuario WHERE id = ?", [id])

    await connection.end();
}

module.exports = {
    getAllusuario,
    createUsuario,
    updateUsuario,
    deleteUsuario

};
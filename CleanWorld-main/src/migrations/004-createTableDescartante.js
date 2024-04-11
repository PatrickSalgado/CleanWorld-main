const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function createTableDescartante(){
    try{
    const connection = await mysql.createConnection(databaseConfig);

    await connection.query(`USE ${databaseConfig.database}`);

    await connection.query(`CREATE TABLE IF NOT EXISTIS descartante(
        id INT NOT NULL AUTO_INCREMENT PRIMARY_KEY,
        cadastroMateriais INT NOT NULL,
        id_usuario INT NOT NULL,
        FOREIGN KEY id_usuario REFERENCES usuario(id)
    )`);

    await connection.end();
    console.log("Tabela do Descartante criada com sucesso!");

} catch(error){
    console.log(`Error: ${error}`);
}
};

createTableDescartante();
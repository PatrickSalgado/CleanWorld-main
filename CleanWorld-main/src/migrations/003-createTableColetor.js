const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function createTableColetor(){
    
    try{
        const connection = await mysql.createConnection(databaseConfig);

        await connection.query(`USE ${databaseConfig.database}`);

        await connection.query(`CREATE TABLE IF NOT EXISTS coletor (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            tipoColetor VARCHAR(255) NOT NULL,
            peso VARCHAR(255) NOT NULL,
            id_usuario INT NOT NULL,
            FOREIGN KEY (id_usuario) REFERENCES usuario(id)
        )`);

        await connection.end();

        console.log(`Table coletor created !`);
    }catch(error){
        console.log(`Error creating table: ${error}`);
    }
};

createTableColetor();

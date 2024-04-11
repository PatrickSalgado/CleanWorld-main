const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function createTableFreteiro(){
    try{
        const connection = await mysql.createConnection(databaseConfig);

        await connection.query(`USE ${databaseConfig.database}`);
        await connection.query(`Create table if not exists product(
            id int not null auto_increment primary key,
            distancia VARCHAR(45) NOT NULL,
            tipocoleta VARCHAR(45) NOT NULL,
            peso VARCHAR(45) NOT NULL,
            nomecarro VARCHAR(45) NOT NULL,
            modelocarro VARCHAR(45) NOT NULL,
            placacarro VARCHAR(45) NOT NULL
        )`);

        await connection.end();

        console.log(`Table Freteiro created !`);
    }catch(error){
        console.log(`Error creating table product: ${error}`);
    }
}

createTableFreteiro();

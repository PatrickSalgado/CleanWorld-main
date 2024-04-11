const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function getAllDescartantes(){

    const connection = await mysql.createConnection(databaseConfig);

    const [rows] = connection.query("SELECT * FROM descartante");

    await connection.end();

    return rows;
};

async function updateDescartante(id, cadastroMateriais, id_usuario ){
    const connection = await mysql.createConnection(databaseConfig);
    const update = (`UPDATE `);

    await connection.query(update[id, cadastroMateriais, id_usuario]);

    await connection.end();
};

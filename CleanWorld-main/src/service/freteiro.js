const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function getAllfreteiro(){
    const connection = await mysql.createConnection(databaseConfig);

    const [rows] = await connection.query("SELECT * FROM freteiro");

    await connection.end();

    return rows;
}

async function createfreteiro(id, distancia, tipoColeta, peso, nomeCarro, modeloCarro, placaCarro){
    const connection = await mysql.createConnection(databaseConfig);

    const insertfreteiro = "insert into freteiro(id, distancia, tipoColeta, peso, nomeCarro, modeloCarro, placaCarro) values (?,?,?,?,?,?,?)";

    await connection.query(insertfreteiro, [id, distancia, tipoColeta, peso, nomeCarro, modeloCarro, placaCarro])

    await connection.end();
}

async function updatefreteiro(id, distancia, tipoColeta, peso, nomeCarro, modeloCarro, placaCarro){
    const connection = await mysql.createConnection(databaseConfig);

    const insertfreteiro = "insert into freteiro(id, distancia, tipoColeta, peso, nomeCarro, modeloCarro, placaCarro) values (?,?,?,?,?,?,?)";
    
    const updatefreteiro = "UPDATE freteiro SET id = ?, distancia = ?, tipoColeta = ?, peso = ?, nomeCarro = ?, modeloCarro = ?, placaCarro = ? where idcoletor = ?";

    await connection.query(updatefreteiro,[id, distancia, tipoColeta, peso, nomeCarro, modeloCarro, placaCarro]);

    await connection.end();
}

async function deletefreteiro (id){
    const connection = mysql.createConnection(databaseConfig);

    await connection.query("DELETE FROM freteiro WHERE id = ?", [id])

    await connection.end();
}

module.exports = {
    getAllfreteiro,
    createfreteiro,
    updatefreteiro,
    deletefreteiro,
};


const mysql = require("mysql2/promise");

const databaseconfig = require("../config/database.js");
const database = require("../config/database.js");

async function createdatabase() {
    try {
        const connection = await mysql.createConnection({
            host: databaseconfig.host,
            user: databaseconfig.user,
            password: databaseconfig.password,
        
        });
    
        await connection.query(
            `CREATE DATABASE IF NOT EXISTS ${databaseconfig.database}`
        );
    
        await connection.end();
    
        console.log(`Database created!`);
    } catch (error) {
        console.log(`Error creating database: ${error}`);
    }
    
}

createdatabase();
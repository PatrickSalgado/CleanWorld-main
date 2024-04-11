const express = require("express");
const bodyParser = require("body-parser")
const porta = 3000;
const cleanworld = express();

cleanworld.listen((port) => {
    console.log(`Servidor rodando: http://localhost:${port}`);
});

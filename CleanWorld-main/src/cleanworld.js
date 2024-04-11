const express = require("express");
const bodyParser = require("body-parser")

const port = 3000;
const cleanworld = express();

cleanworld.use(bodyParser.json("application/json")) 

cleanworld.get("/", (req, res) => {
    res.send("<h1>Ola</h1>");
})

cleanworld.listen(port, () => {
    console.log(`Servidor rodando: http://localhost:${port}`);
});

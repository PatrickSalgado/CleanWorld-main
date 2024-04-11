const freteiroService = require('../service/freteiro.js');

async function getAllfreteiro(req, res){
    try{
        const rows = await freteiroService.getAllfreteiro();
        res.status(200).json(rows);
    }catch(error){
        res.status(500).send({
            message: "Error getting freteiro!",
            body: error.message,
        });
    }
}

async function createfreteiro(req, res){
    const {id, distancia, tipocoleta, peso, nomecarro, modelocarro, placacarro} = req.body;
    try{
        await freteiroService.createfreteiro(id, distancia, tipocoleta, peso, nomecarro, modelocarro, placacarro);
        res.status(201).json({
            message: "Sucess"
        });
    }catch(error){
        res.status(500).send({
            message: "Error adding freteiro!",
            error: error.message,
        });
    }
}

async function updatefreteiro(req, res){
    try{
        const {id} = req.params;
        const {distancia, tipocoleta, peso, nomecarro, modelocarro, placacarro} = req.params;
        await freteiroService.updatefreteiro(id, distancia, tipocoleta, peso, nomecarro, modelocarro, placacarro);
        res.status(204).json("Sucess");    
    }catch(error){
        res.status(500).send({
            message: "Error updating freteiro!",
            body: error.message,
        })
    }
}

module.exports = {
    getAllfreteiro,
    createfreteiro,
    updatefreteiro,
}
const coletorService = require('../service/coletor.js');

async function getAllcoletor(req, res){
    try{
        const rows = await coletorService.getAllcoletor();
        res.status(200).json(rows);
    }catch(error){
        res.status(500).send({
            message: "Error getting coletor",
            body: error.message,
        });
    }
}

async function createcoletor(req, res){
    const{id, tipocoleta, peso} = req.body;
    try{
        await coletorService.createcoletor(id, tipocoleta, peso);
        res.status(201).json({message:"Sucess"});
    }catch(error){
        res.status(500).send({
            message:"Error adding user!",
            error: error.message
        });
    }
}

async function updatecoletor(req, res){
    try{
        const {id}=req.params;
        const {tipocoleta, peso} = req.params;
        await coletorService.updatecoletor(id, tipocoleta, peso);
        res.status(204).json("Sucess");    
    }catch(error){
        res.status(500).send({
            message: "Error updating coletor!",
            body: error.message,
        })
    }
}

module.exports = {
    getAllcoletor,
    createcoletor,
    updatecoletor,
}
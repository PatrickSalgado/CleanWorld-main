const descartanteService = require('../service/descartante.js');

async function getAlldescartante(res, req) {
    try{
        const rows = await descartanteService.getAlldescartante();
        
        res.status(200).json(rows);
    }catch (error) {
        res.status(500).sand({
            message: "Error getting descartante",
            body: error.message,
        });
    }
}

async function createdescartante(req , res) {

    try {

        


    }catch(error) {
        res.status(500).send({
            message: "Error adding descartante!",
            error: error.message,
        });

    }

}
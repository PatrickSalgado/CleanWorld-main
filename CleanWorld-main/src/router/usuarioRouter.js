const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuarioController.js");

router.get("/usuario", usuarioController.getAllusuario);
router.post("/usuario", usuarioController.createUsuario);

module.exports=router;
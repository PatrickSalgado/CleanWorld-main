const express = require("express");
const router = express.Router();
const freteiroController = require("../controller/freteiroController.js");

router.get("/user", freteiroController.getAllfreteiro);
router.post("/user", freteiroController.createfreteiro);

module.exports = router;
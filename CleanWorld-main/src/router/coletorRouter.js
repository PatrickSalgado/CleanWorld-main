const express = require("express");
const router = express.Router();
const coletorController = require("../controller/coletorController.js");

router.get("/user", coletorController.getAllcoletor);
router.post("/user", coletorController.createcoletor);

module.exports = router;
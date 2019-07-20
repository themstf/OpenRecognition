const express = require('express');
const router = express.Router();

const profiles = require("./profiles");
router.use("/profiles", profiles);

const connections = require("./connections");
router.use("/connections", connections);

module.exports = router;
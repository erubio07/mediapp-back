const { Router } = require("express");
const fillTemplate = require("./fillTemplate");

const router = Router();

router.use("/fill", fillTemplate);

module.exports = router;

const { Router } = require("express");
const fillTemplate = require("./fillTemplate");
const login = require("./login");

const router = Router();

router.use("/login", login);
router.use("/fill", fillTemplate);

module.exports = router;

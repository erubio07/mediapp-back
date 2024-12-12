const { Router } = require("express");
const fillTemplate = require("./fillTemplate");
const login = require("./login");
const user = require("./user");

const router = Router();

router.use("/login", login);
router.use("/user", user);
router.use("/fill", fillTemplate);

module.exports = router;

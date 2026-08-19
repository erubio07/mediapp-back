const { Router } = require("express");

const fillTemplate = require("./fillTemplate");
const login = require("./login");
const user = require("./user");
const authJwt = require("../middlewares/authJwt");
const refreshToken = require("./refreshToken");

const router = Router();

router.use("/login", login);

router.use("/user", authJwt, user);

router.use("/fill", authJwt, fillTemplate);

router.use("/refresh-token", refreshToken);

module.exports = router;

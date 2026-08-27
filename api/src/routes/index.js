const { Router } = require("express");

const fillTemplate = require("./fillTemplate");
const login = require("./login");
const user = require("./user");
const mediation = require("./mediation");
const authJwt = require("../middlewares/authJwt");
const refreshToken = require("./refreshToken");

const router = Router();

router.use("/login", login);

router.use("/user", authJwt, user);

router.use("/fill", authJwt, fillTemplate);

router.use("/refresh-token", refreshToken);

router.use("/mediation", authJwt, mediation);

module.exports = router;

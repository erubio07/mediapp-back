const { Router } = require("express");
const { loginHandler } = require("../handlers/loginHandlers");

const router = Router();

router.post("/", loginHandler);

module.exports = router;

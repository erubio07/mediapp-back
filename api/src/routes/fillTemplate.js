const { Router } = require("express");
const { fillTemplateHandler } = require("../handlers/fillTemplateHandler");

const router = Router();

router.post("/", fillTemplateHandler);

module.exports = router;

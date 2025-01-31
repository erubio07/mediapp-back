const { Router } = require("express");
const {
  fillTemplateHandler,
  fillTemplateHandlerDoc11,
} = require("../handlers/fillTemplateHandler");

const router = Router();

router.post("/template_10", fillTemplateHandler);
router.post("/template_11", fillTemplateHandlerDoc11);

module.exports = router;

const { Router } = require("express");
const {
  fillTemplateHandler,
  fillActaAudiencia,
} = require("../handlers/fillTemplateHandler");

const router = Router();

router.post("/", fillTemplateHandler);
router.post("/actaAudienciaVirtual", fillActaAudiencia);

module.exports = router;

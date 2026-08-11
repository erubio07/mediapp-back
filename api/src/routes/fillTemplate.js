const { Router } = require("express");
const {
  fillTemplateHandler,
  fillActaAudiencia,
  fillActaCierre
} = require("../handlers/fillTemplateHandler");

const router = Router();

router.post("/", fillTemplateHandler);
router.post("/actaAudienciaVirtual", fillActaAudiencia);
router.post("/actaCierre", fillActaCierre)

module.exports = router;

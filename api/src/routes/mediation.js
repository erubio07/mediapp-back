const { Router } = require("express");
const {
  createMediationHandler,
  updateMediationHandler,
} = require("../handlers/mediationHandler");

const router = Router();

router.post("/", createMediationHandler);
router.patch("/:id", updateMediationHandler);

module.exports = router;

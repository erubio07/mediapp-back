const { Router } = require("express");
const {
  createMediationHandler,
  updateMediationHandler,
  getMediationByNumberHandler,
  getUserMediationsHandler,
} = require("../handlers/mediationHandler");

const router = Router();

router.post("/", createMediationHandler);
router.patch("/:id", updateMediationHandler);
router.get("/number/:number", getMediationByNumberHandler);
router.get("/", getUserMediationsHandler);

module.exports = router;

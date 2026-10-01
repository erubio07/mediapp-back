const { Router } = require("express");
const {
  createMediationHandler,
  updateMediationHandler,
  getMediationByNumberHandler,
  getUserMediationsHandler,
  searchMediationsByNameHandler,
} = require("../handlers/mediationHandler");

const router = Router();

router.post("/", createMediationHandler);
router.get("/search", searchMediationsByNameHandler);
router.get("/number/:number", getMediationByNumberHandler);
router.get("/", getUserMediationsHandler);
router.patch("/:id", updateMediationHandler);

module.exports = router;

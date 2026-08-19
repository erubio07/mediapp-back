const { Router } = require("express");
const refreshTokenController = require("../controllers/refreshTokenController");

const router = Router();

router.post("/", refreshTokenController);

module.exports = router;

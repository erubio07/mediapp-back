const { Router } = require("express");
const {
  createUserHandler,
  getUserByIdHandler,
  getAllUsersHandler,
} = require("../handlers/usersHandlers");

const router = Router();

router.post("/", createUserHandler);
router.get("/", getAllUsersHandler);
router.get("/:id", getUserByIdHandler);

module.exports = router;
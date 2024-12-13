const { Router } = require("express");
const {
  createUserHandler,
  getUserByIdHandler,
  getAllUsersHandler,
  deleteUserHandler,
  restoreUserHandler,
} = require("../handlers/usersHandlers");

const router = Router();

router.post("/", createUserHandler);
router.get("/", getAllUsersHandler);
router.get("/:id", getUserByIdHandler);
router.delete("/:id", deleteUserHandler);
router.put("/:id", restoreUserHandler);

module.exports = router;

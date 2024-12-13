const { Router } = require("express");
const {
  createUserHandler,
  getUserByIdHandler,
  getAllUsersHandler,
  deleteUserHandler,
  restoreUserHandler,
  updatedUserHandler,
} = require("../handlers/usersHandlers");

const router = Router();

router.post("/", createUserHandler);
router.get("/", getAllUsersHandler);
router.get("/:id", getUserByIdHandler);
router.delete("/:id", deleteUserHandler);
router.put("/:id", restoreUserHandler);
router.put("/update/:id", updatedUserHandler);

module.exports = router;

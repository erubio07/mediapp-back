const {
  createUser,
  getUserById,
  getAllUsers,
  deleteUser,
  restoreUser,
} = require("../controllers/userControllers");

const createUserHandler = async (req, res) => {
  const { name, surname, mail, username, password, role } = req.body;
  try {
    const newUser = await createUser(
      name,
      surname,
      mail,
      username,
      password,
      role
    );
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllUsersHandler = async (req, res) => {
  try {
    const allUsers = await getAllUsers();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUserHandler = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteUser(id);
    res.status(200).send("Usuario Elminado con éxito");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const restoreUserHandler = async (req, res) => {
  const { id } = req.params;
  try {
    await restoreUser(id);
    res.status(200).send("Usuario restaurado con éxito");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createUserHandler,
  getUserByIdHandler,
  getAllUsersHandler,
  deleteUserHandler,
  restoreUserHandler,
};

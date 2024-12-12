const { User, Role } = require("../db");

const createUser = async (name, surname, mail, username, password, role) => {
  try {
    if (!name || !surname || !mail || !username || !password || !role)
      throw new Error("Datos incompletos para crear el usuario");
    const newUser = await User.create({
      name,
      surname,
      mail,
      username,
      password,
    });
    await newUser.setRole(role);
    return newUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserById = async (id) => {
  try {
    if (!id) throw new Error("Se debe proporcionar un id válido");
    const user = await User.findByPk(id, {
      include: [{ model: Role }],
    });
    if (!user) throw new Error("No hay usarios para el id proporcionado");
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllUsers = async () => {
  try {
    const allUsers = await User.findAll({
      include: [{ model: Role }],
    });
    return allUsers;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { createUser, getUserById, getAllUsers };

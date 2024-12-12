const { Role } = require("../db");

const fillRoles = async () => {
  try {
    const role1 = await Role.create({
      name: "Admin",
    });
    const role2 = await Role.create({
      name: "User",
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = fillRoles;

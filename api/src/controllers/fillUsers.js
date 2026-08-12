const { User, Role } = require("../db");

const fillUser = async () => {
  try {
    const user1 = await User.create({
      name: "Ezequiel",
      surname: "Rubio",
      mail: "erubio07@gmail.com",
      username: "erubio07",
      password: "2423122621",
    });
    await user1.setRole(1);
    const user2 = await User.create({
      name: "Daniel",
      surname: "Zaneti",
      mail: "dzaneti@gmail.com",
      username: "dzaneti",
      password: "zaneti123",
    });
    await user2.setRole(1);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = fillUser;

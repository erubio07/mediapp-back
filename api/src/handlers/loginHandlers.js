const { login } = require("../controllers/loginController");

const loginHandler = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await login(username, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginHandler };

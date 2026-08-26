const { createMediation } = require("../controllers/mediationController");

const createMediationHandler = async (req, res) => {
  try {
    const data = req.body;
    const userId = req.userId;

    const mediation = await createMediation(data, userId);

    return res.status(201).json({
      message: "Mediación creada correctamente",
      mediation,
    });
  } catch (error) {
    console.error("Error creando la mediacion: ", error.message);

    return res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { createMediationHandler };

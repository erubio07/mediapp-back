const {
  createMediation,
  updateMediation,
} = require("../controllers/mediationController");

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

const updateMediationHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const userId = req.userId;

    const mediation = await updateMediation(id, data, userId);

    return res.status(200).json({
      mesage: "Mediación actualizada correctamente",
      mediation,
    });
  } catch (error) {
    console.error("Error actualizando la mediación", error.mesage);

    return res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { createMediationHandler, updateMediationHandler };

const {
  createMediation,
  updateMediation,
  getMediationByNumber,
  getUserMediations,
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
      message: "Mediación actualizada correctamente",
      mediation,
    });
  } catch (error) {
    console.error("Error actualizando la mediación", error.message);

    return res.status(400).json({
      error: error.message,
    });
  }
};

const getMediationByNumberHandler = async (req, res) => {
  try {
    const { number } = req.params;
    const userId = req.userId;

    const mediation = await getMediationByNumber(number, userId);

    return res.status(200).json({
      message: "Mediacion encontrada correctamente",
      mediation,
    });
  } catch (error) {
    console.error("Error buscando la mediación: ", error.message);
  }

  return res.status(400).json({
    error: error.message,
  });
};

const getUserMediationsHandler = async (req, res) => {
  try {
    const userId = req.userId;

    const mediations = await getUserMediations(userId);

    return res.status(200).json({
      message: "Mediaciones obtenidas correctamente",
      mediations,
    });
  } catch (error) {
    console.error("Error obteniendo las mediaciones: ", error.message);

    return res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = {
  createMediationHandler,
  updateMediationHandler,
  getMediationByNumberHandler,
  getUserMediationsHandler,
};

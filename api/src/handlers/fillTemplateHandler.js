const {
  generateDocument10,
  generateDocument11,
} = require("../controllers/fillContracts/fillDocumentsControllers");

const fillTemplateHandler = async (req, res) => {
  try {
    // Obtener datos del request
    const data = req.body;

    // Generar el documento
    const generateDocument = generateDocument10(data);

    // Configurar encabezados de respuesta
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=documento_generado.docx"
    );
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    );

    // Enviar documento generado
    res.send(generatedDocument);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send(error.message);
  }
};

const fillTemplateHandlerDoc11 = async (req, res) => {
  try {
    // Obtener datos del request
    const data = req.body;

    // Generar el documento
    const generatedDocument = generateDocument11(data);

    // Configurar encabezados de respuesta
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=documento_generado.docx"
    );
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    );

    // Enviar documento generado
    res.send(generatedDocument);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send(error.message);
  }
};

module.exports = { fillTemplateHandler, fillTemplateHandlerDoc11 };

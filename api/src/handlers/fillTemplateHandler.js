const {
  generateDocument,
} = require("../controllers/fillContracts/fillContractsHandlers");

const fillTemplateHandler = async (req, res) => {
  try {
    // Obtener datos del request
    const data = req.body;

    // Generar el documento
    const generatedDocument = generateDocument(data);

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

module.exports = { fillTemplateHandler };

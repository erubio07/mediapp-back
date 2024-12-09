const { Router } = require("express");
const fs = require("fs");
const path = require("path");
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");

const router = Router();

router.post("/", async (req, res) => {
  try {
    // Ruta absoluta al archivo
    const templatePath = path.join(__dirname, "template.docx");

    // Validar si el archivo existe
    if (!fs.existsSync(templatePath)) {
      return res.status(404).send("El archivo template.docx no existe.");
    }

    // Leer el archivo como buffer binario
    const templateBuffer = fs.readFileSync(templatePath);

    let zip;
    try {
      // Crear instancia de PizZip
      zip = new PizZip(templateBuffer);
    } catch (error) {
      console.error("Error al leer el archivo como ZIP:", error);
      return res
        .status(400)
        .send("El archivo no es un documento válido o está corrupto.");
    }

    // Cargar el documento en Docxtemplater
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    // Datos para reemplazar en la plantilla
    const data = {
      nombre: req.body.nombre || "Usuario",
    };

    // Configurar los datos y renderizar el documento
    doc.setData(data);
    doc.render();

    // Generar el documento como buffer
    const generatedDocument = doc.getZip().generate({ type: "nodebuffer" });

    // Enviar el documento generado
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=documento_generado.docx"
    );
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    );
    res.send(generatedDocument);
  } catch (error) {
    console.error("Error general:", error);
    res.status(500).send("Ocurrió un error al generar el documento.");
  }
});

module.exports = router;

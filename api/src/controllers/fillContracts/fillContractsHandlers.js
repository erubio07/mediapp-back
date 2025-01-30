const fs = require("fs");
const path = require("path");
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");

const generateDocument = (data) => {
  console.log(data);

  // Ruta al archivo de plantilla
  const templatePath = path.join(__dirname, "ACTA DE AUDIENCIA_template.docx");

  // Validar si el archivo existe
  if (!fs.existsSync(templatePath)) {
    throw new Error("El archivo template.docx no existe.");
  }

  // Leer el archivo como buffer binario
  const templateBuffer = fs.readFileSync(templatePath);

  let zip;
  try {
    // Crear instancia de PizZip
    zip = new PizZip(templateBuffer);
  } catch (error) {
    throw new Error("El archivo no es un documento válido o está corrupto.");
  }

  // Cargar el documento en Docxtemplater con delimitadores configurados
  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
    delimiters: {
      start: "{",
      end: "}",
    },
  });

  // Configurar los datos y renderizar el documento

  const requirenteName = data.requirente?.name || "Sin Definir";
  const requirenteDni = data.requirente?.dni || "00.000.000";
  const requeridoName = data.requerido?.name || "Sin Definir";
  const reuqeridoDni = data.requerido?.dni || "00.000.000";

  doc.setData({
    number: data.number || "00000",
    date: data.date || "Sin definir",
    hour: data.hour || "00:00",
    start: data.start || "00:00",
    end: data.end || "00:00",
    nextDate: data.nextDate || "Sin definir",
    requirente_name: requirenteName,
    requirente_dni: requirenteDni,
    requerido_name: requeridoName,
    requerido_dni: reuqeridoDni,
  });

  try {
    doc.render();
  } catch (error) {
    console.error("Error al renderizar el documento:", error);
    throw new Error("Error al generar el documento.");
  }

  // Generar el documento como buffer
  return doc.getZip().generate({ type: "nodebuffer" });
};

module.exports = { generateDocument };

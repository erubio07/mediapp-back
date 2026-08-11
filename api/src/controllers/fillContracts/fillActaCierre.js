const fs = require("fs");
const path = require("path");
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");

const generateActaCierre = (data) => {
  console.log("Datos recibidos para Acta de Cierre:", data);

  // Ruta al archivo de plantilla
  const templatePath = path.join(
    __dirname,
    "1-2- A3 acta de cierre CENTRO JUDICIAL VIRTUAL VIGENTE-8.docx"
  );

  // Validar que exista la plantilla
  if (!fs.existsSync(templatePath)) {
    throw new Error(
      "El archivo de plantilla del Acta de Cierre no existe."
    );
  }

  // Leer archivo DOCX
  const templateBuffer = fs.readFileSync(templatePath);

  let zip;

  try {
    zip = new PizZip(templateBuffer);
  } catch (error) {
    console.error(
      "Error al abrir la plantilla del Acta de Cierre:",
      error
    );

    throw new Error(
      "El archivo del Acta de Cierre no es un documento válido o está corrupto."
    );
  }

  // Crear instancia Docxtemplater
  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
    delimiters: {
      start: "{",
      end: "}",
    },
  });

  /*
   * ==============================
   * DATOS DEL REQUIRENTE
   * ==============================
   */

  const requirenteName =
    data.requirente?.name || "Sin definir";

  const requirenteDni =
    data.requirente?.dni || "Sin definir";

  const requirenteAdress =
    data.requirente?.adress || "Sin definir";

  const requirenteEmail =
    data.requirente?.email || "Sin definir";

  const requirentePhoneNumber =
    data.requirente?.phoneNumber || "Sin definir";

  // Letrado requirente

  const requirenteLetradoName =
    data.requirente?.letrado?.name || "Sin definir";

  const requirenteLetradoAdress =
    data.requirente?.letrado?.adress || "Sin definir";

  const requirenteLetradoEmail =
    data.requirente?.letrado?.email || "Sin definir";

  const requirenteLetradoPhoneNumber =
    data.requirente?.letrado?.phoneNumber || "Sin definir";

  // Mediador requirente

  const requirenteMediadorName =
    data.requirente?.mediador?.name || "Sin definir";

  const requirenteMediadorMat =
    data.requirente?.mediador?.mat || "Sin definir";

  /*
   * ==============================
   * DATOS DEL REQUERIDO
   * ==============================
   */

  const requeridoName =
    data.requerido?.name || "Sin definir";

  const requeridoDni =
    data.requerido?.dni || "Sin definir";

  const requeridoAdress =
    data.requerido?.adress || "Sin definir";

  const requeridoEmail =
    data.requerido?.email || "Sin definir";

  const requeridoPhoneNumber =
    data.requerido?.phoneNumber || "Sin definir";

  // Letrado requerido

  const requeridoLetradoName =
    data.requerido?.letrado?.name || "Sin definir";

  const requeridoLetradoAdress =
    data.requerido?.letrado?.adress || "Sin definir";

  const requeridoLetradoEmail =
    data.requerido?.letrado?.email || "Sin definir";

  const requeridoLetradoPhoneNumber =
    data.requerido?.letrado?.phoneNumber || "Sin definir";

  // Mediador requerido

  const requeridoMediadorName =
    data.requerido?.mediador?.name || "Sin definir";

  const requeridoMediadorMat =
    data.requerido?.mediador?.mat || "Sin definir";

  /*
   * ==============================
   * DATOS DEL TERCERO
   * ==============================
   */

  const terceroName =
    data.tercero?.name || "Sin definir";

  const terceroDni =
    data.tercero?.dni || "Sin definir";

  const terceroAdress =
    data.tercero?.adress || "Sin definir";

  const terceroCp =
    data.tercero?.cp || "Sin definir";

  const terceroPhoneNumber =
    data.tercero?.phoneNumber || "Sin definir";

  const terceroCellPhone =
    data.tercero?.cellPhone || "Sin definir";

  /*
   * ==============================
   * DATOS A INSERTAR EN WORD
   * ==============================
   */

  doc.setData({
    // Expediente
    expediente:
      data.expediente || "Sin definir",

    number:
      data.number || "Sin definir",

    date:
      data.date || "Sin definir",

    hour:
      data.hour || "00:00",

    start:
      data.start || "00:00",

    end:
      data.end || "00:00",

    nextDate:
      data.nextDate || "Sin definir",

    adressMediacion:
      data.adressMediacion || "Sin definir",

    abogadoPatrocinante:
      data.abogadoPatrocinante || "Sin definir",

    /*
     * REQUIRENTE
     */

    requirente_name:
      requirenteName,

    requirente_dni:
      requirenteDni,

    requirente_adress:
      requirenteAdress,

    requirente_email:
      requirenteEmail,

    requirente_phoneNumber:
      requirentePhoneNumber,

    requirente_letrado_name:
      requirenteLetradoName,

    requirente_letrado_adress:
      requirenteLetradoAdress,

    requirente_letrado_email:
      requirenteLetradoEmail,

    requirente_letrado_phoneNumber:
      requirenteLetradoPhoneNumber,

    requirente_mediador_name:
      requirenteMediadorName,

    requirente_mediador_mat:
      requirenteMediadorMat,

    /*
     * REQUERIDO
     */

    requerido_name:
      requeridoName,

    requerido_dni:
      requeridoDni,

    requerido_adress:
      requeridoAdress,

    requerido_email:
      requeridoEmail,

    requerido_phoneNumber:
      requeridoPhoneNumber,

    requerido_letrado_name:
      requeridoLetradoName,

    requerido_letrado_adress:
      requeridoLetradoAdress,

    requerido_letrado_email:
      requeridoLetradoEmail,

    requerido_letrado_phoneNumber:
      requeridoLetradoPhoneNumber,

    requerido_mediador_name:
      requeridoMediadorName,

    requerido_mediador_mat:
      requeridoMediadorMat,

    /*
     * TERCERO
     */

    tercero_name:
      terceroName,

    tercero_dni:
      terceroDni,

    tercero_adress:
      terceroAdress,

    tercero_cp:
      terceroCp,

    tercero_phoneNumber:
      terceroPhoneNumber,

    tercero_cellPhone:
      terceroCellPhone,
  });

  /*
   * ==============================
   * RENDERIZAR DOCUMENTO
   * ==============================
   */

  try {
    doc.render();
  } catch (error) {
    console.error(
      "Error al renderizar el Acta de Cierre:",
      error
    );

    if (error.properties?.errors) {
      console.error(
        "Errores de Docxtemplater:",
        error.properties.errors
      );
    }

    throw new Error(
      "Error al generar el Acta de Cierre."
    );
  }

  /*
   * ==============================
   * GENERAR BUFFER
   * ==============================
   */

  return doc.getZip().generate({
    type: "nodebuffer",
    compression: "DEFLATE",
  });
};

module.exports = {
  generateActaCierre,
};
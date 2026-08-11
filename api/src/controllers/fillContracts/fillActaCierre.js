const fs = require("fs");
const path = require("path");
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");

const generateActaCierre = (data) => {
  console.log("Datos recibidos para Acta de Cierre:", data);

  const templatePath = path.join(
    __dirname,
    "1-2- A3 acta de cierre CENTRO JUDICIAL VIRTUAL VIGENTE-8.docx"
  );

  if (!fs.existsSync(templatePath)) {
    throw new Error(
      "El archivo de plantilla del Acta de Cierre no existe."
    );
  }

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

  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
    delimiters: {
      start: "{",
      end: "}",
    },
  });

  /* ==============================
   * DATOS DEL REQUIRENTE
   * ============================== */

  const requirenteName =
    data.requirente?.name || "Sin definir";

  const requirenteDni =
    data.requirente?.dni || "Sin definir";

  const requirenteAdress =
    data.requirente?.adress || "Sin definir";

  const requirenteLocalidad =
    data.requirente?.localidad || "Sin definir";

  const requirenteCp =
    data.requirente?.cp || "Sin definir";

  const requirenteEmail =
    data.requirente?.email || "Sin definir";

  // Teléfono celular
  const requirentePhoneNumber =
    data.requirente?.phoneNumber || "Sin definir";

  // Teléfono fijo
  const requirentePhoneFixed =
    data.requirente?.phoneFixed || "Sin definir";


  /* ==============================
   * LETRADO REQUIRENTE
   * ============================== */

  const requirenteLetradoName =
    data.requirente?.letrado?.name || "Sin definir";

  const requirenteLetradoAdress =
    data.requirente?.letrado?.adress || "Sin definir";

  const requirenteLetradoLocalidad =
    data.requirente?.letrado?.localidad || "Sin definir";

  const requirenteLetradoCp =
    data.requirente?.letrado?.cp || "Sin definir";

  const requirenteLetradoEmail =
    data.requirente?.letrado?.email || "Sin definir";

  const requirenteLetradoPhoneNumber =
    data.requirente?.letrado?.phoneNumber || "Sin definir";

  // Matrícula abogado requirente
  const requirenteLetradoMat =
    data.requirente?.letrado?.mat || "Sin definir";


  /* ==============================
   * MEDIADOR REQUIRENTE
   * ============================== */

  const requirenteMediadorName =
    data.requirente?.mediador?.name || "Sin definir";

  const requirenteMediadorMat =
    data.requirente?.mediador?.mat || "Sin definir";


  /* ==============================
   * DATOS DEL REQUERIDO
   * ============================== */

  const requeridoName =
    data.requerido?.name || "Sin definir";

  const requeridoDni =
    data.requerido?.dni || "Sin definir";

  const requeridoAdress =
    data.requerido?.adress || "Sin definir";

  const requeridoLocalidad =
    data.requerido?.localidad || "Sin definir";

  const requeridoCp =
    data.requerido?.cp || "Sin definir";

  const requeridoEmail =
    data.requerido?.email || "Sin definir";

  // Teléfono celular
  const requeridoPhoneNumber =
    data.requerido?.phoneNumber || "Sin definir";

  // Teléfono fijo
  const requeridoPhoneFixed =
    data.requerido?.phoneFixed || "Sin definir";


  /* ==============================
   * LETRADO REQUERIDO
   * ============================== */

  const requeridoLetradoName =
    data.requerido?.letrado?.name || "Sin definir";

  const requeridoLetradoAdress =
    data.requerido?.letrado?.adress || "Sin definir";

  const requeridoLetradoEmail =
    data.requerido?.letrado?.email || "Sin definir";

  const requeridoLetradoPhoneNumber =
    data.requerido?.letrado?.phoneNumber || "Sin definir";

  // Matrícula abogado requerido
  const requeridoLetradoMat =
    data.requerido?.letrado?.mat || "Sin definir";


  /* ==============================
   * MEDIADOR REQUERIDO
   * ============================== */

  const requeridoMediadorName =
    data.requerido?.mediador?.name || "Sin definir";

  const requeridoMediadorMat =
    data.requerido?.mediador?.mat || "Sin definir";


  /* ==============================
   * DATOS DEL TERCERO
   * ============================== */

  const terceroName =
    data.tercero?.name || "Sin definir";

  const terceroDni =
    data.tercero?.dni || "Sin definir";

  // Domicilio tercero
  const terceroAdress =
    data.tercero?.adress || "Sin definir";

  const terceroLocalidad =
    data.tercero?.localidad || "Sin definir";

  const terceroCp =
    data.tercero?.cp || "Sin definir";

  const terceroPhoneNumber =
    data.tercero?.phoneNumber || "Sin definir";

  const terceroCellPhone =
    data.tercero?.cellPhone || "Sin definir";


  /* ==============================
   * ABOGADO PATROCINANTE
   * ============================== */

  const abogadoPatrocinante =
    data.abogadoPatrocinante || "Sin definir";

  // Matrícula abogado patrocinante
  const abogadoPatrocinanteMat =
    data.abogadoPatrocinanteMat || "Sin definir";


  /* ==============================
   * DATOS A INSERTAR EN EL WORD
   * ============================== */

  doc.setData({

    /* DATOS GENERALES */

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


    /* ==============================
     * REQUIRENTE
     * ============================== */

    requirente_name:
      requirenteName,

    requirente_dni:
      requirenteDni,

    requirente_adress:
      requirenteAdress,

    requirente_localidad:
      requirenteLocalidad,

    requirente_cp:
      requirenteCp,

    requirente_email:
      requirenteEmail,

    requirente_phoneNumber:
      requirentePhoneNumber,

    requirente_phoneFixed:
      requirentePhoneFixed,


    /* ==============================
     * LETRADO REQUIRENTE
     * ============================== */

    requirente_letrado_name:
      requirenteLetradoName,

    requirente_letrado_adress:
      requirenteLetradoAdress,

    requirente_letrado_localidad:
      requirenteLetradoLocalidad,

    requirente_letrado_cp:
      requirenteLetradoCp,

    requirente_letrado_email:
      requirenteLetradoEmail,

    requirente_letrado_phoneNumber:
      requirenteLetradoPhoneNumber,

    requirente_letrado_mat:
      requirenteLetradoMat,


    /* ==============================
     * MEDIADOR REQUIRENTE
     * ============================== */

    requirente_mediador_name:
      requirenteMediadorName,

    requirente_mediador_mat:
      requirenteMediadorMat,


    /* ==============================
     * REQUERIDO
     * ============================== */

    requerido_name:
      requeridoName,

    requerido_dni:
      requeridoDni,

    requerido_adress:
      requeridoAdress,

    requerido_localidad:
      requeridoLocalidad,

    requerido_cp:
      requeridoCp,

    requerido_email:
      requeridoEmail,

    requerido_phoneNumber:
      requeridoPhoneNumber,

    requerido_phoneFixed:
      requeridoPhoneFixed,


    /* ==============================
     * LETRADO REQUERIDO
     * ============================== */

    requerido_letrado_name:
      requeridoLetradoName,

    requerido_letrado_adress:
      requeridoLetradoAdress,

    requerido_letrado_email:
      requeridoLetradoEmail,

    requerido_letrado_phoneNumber:
      requeridoLetradoPhoneNumber,

    requerido_letrado_mat:
      requeridoLetradoMat,


    /* ==============================
     * MEDIADOR REQUERIDO
     * ============================== */

    requerido_mediador_name:
      requeridoMediadorName,

    requerido_mediador_mat:
      requeridoMediadorMat,


    /* ==============================
     * TERCERO
     * ============================== */

    tercero_name:
      terceroName,

    tercero_dni:
      terceroDni,

    tercero_adress:
      terceroAdress,

    tercero_localidad:
      terceroLocalidad,

    tercero_cp:
      terceroCp,

    tercero_phoneNumber:
      terceroPhoneNumber,

    tercero_cellPhone:
      terceroCellPhone,


    /* ==============================
     * ABOGADO PATROCINANTE
     * ============================== */

    abogadoPatrocinante:
      abogadoPatrocinante,

    abogadoPatrocinanteMat:
      abogadoPatrocinanteMat,
  });


  /* ==============================
   * RENDERIZAR WORD
   * ============================== */

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


  /* ==============================
   * DEVOLVER DOCUMENTO
   * ============================== */

  return doc.getZip().generate({
    type: "nodebuffer",
    compression: "DEFLATE",
  });
};


module.exports = {
  generateActaCierre,
};
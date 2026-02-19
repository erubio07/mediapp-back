const fs = require("fs");
const path = require("path");
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");

const generateActaAudienciaVirt = (data) => {
  console.log(data);

  // Ruta al archivo de plantilla
  const templatePath = path.join(
    __dirname,
    "1-1- ACTA Audiencia VIRTUAL CJM 2b.docx",
  );

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

  //Datos requirente

  const requirenteName = data.requirente?.name || "Sin Definir";
  const requirenteAdress = data.requirente?.adress || "Sin Definir";
  const requirenteDni = data.requirente?.dni || "00.000.000";
  const requirenteEmail = data.requirente?.email || "Sin Definir";
  const requirentePhoneNumber = data.requirente?.phoneNumber || "Sin Definir";
  const requirenteLetradoName = data.requirente?.letrado?.name || "Sin Definir";
  const requirenteLetradoAdress =
    data.requirente?.letrado?.adress || "Sin Definir";
  const requirenteLetradoEmail =
    data.requirente?.letrado?.email || "Sin Definir";
  const requirenteLetradoPhone =
    data.requirente?.letrado?.email || "Sin Definir";
  const requirenteMediadorName =
    data.requirente?.mediador?.name || "Sin definir";
  const requirenteMediadorMat = data.requirente?.mediador?.mat || "Sin definir";

  //datos requerido

  const requeridoName = data.requerido?.name || "Sin Definir";
  const reuqeridoDni = data.requerido?.dni || "00.000.000";
  const requeridoAdress = data.requerido?.adress || "Sin Definir";
  const requeridoEmail = data.requerido?.email || "Sin Definir";
  const requeridoPhoneNumber = data.requerido?.phoneNumber || "Sin Definir";
  const requeridoLetradoName = data.requerido?.letrado?.name || "Sin Definir";
  const requeridoLetradoAdress =
    data.requerido?.letrado?.adress || "Sin Definir";
  const requeridoLetradoEmail = data.requerido?.letrado?.email || "Sin definir";
  const requeridoLetradoPhone = data.requerido?.letrado?.phone || "Sin definir";
  const requeridoMediadorName = data.requerido?.mediador?.name || "Sin definir";
  const requeridoMediadorMat = data.requerido?.mediador?.mat || "Sin definir";

  //datos tercero

  const terceroName = data.tercero?.name || "Sin definir";
  const terceroDni = data.tercero?.dni || "Sin definir";
  const terceroAdress = data.tercero?.adress || "Sin definir";
  const terceroCp = data.tercero?.cp || "Sin definir";
  const terceroPhoneNumber = data.tercero?.phoneNumber || "Sin definir";
  const terceroCellPhone = data.tercero?.cellPhone || "Sin definir";

  doc.setData({
    expediente: data.expediente || "Sin Definir",
    number: data.number || "00000",
    date: data.date || "Sin definir",
    hour: data.hour || "00:00",
    start: data.start || "00:00",
    end: data.end || "00:00",
    nextDate: data.nextDate || "Sin definir",
    adressMediacion: data.adressMediacion,
    abogadoPatrocinante: data.abogadoPatrocinante,

    // Requirente

    requirente_name: requirenteName,
    requirente_adress: requirenteAdress,
    requirente_dni: requirenteDni,
    requirente_email: requirenteEmail,
    requirente_phoneNumber: requirentePhoneNumber,
    requirente_letrado_name: requirenteLetradoName,
    requirente_letrado_adress: requirenteLetradoAdress,
    requirente_letrado_email: requirenteLetradoEmail,
    requirente_letrado_phoneNumber: requirenteLetradoPhone,
    requirente_mediador_name: requirenteMediadorName,
    requirente_mediador_mat: requirenteMediadorMat,

    //Requerido

    requerido_name: requeridoName,
    requerido_adress: requeridoAdress,
    requerido_dni: reuqeridoDni,
    requerido_email: requeridoEmail,
    requerido_phoneNumber: requeridoPhoneNumber,
    requerido_letrado_name: requeridoLetradoName,
    requerido_letrado_adress: requeridoLetradoAdress,
    requerido_letrado_email: requeridoLetradoEmail,
    requerido_letrado_phoneNumber: requeridoLetradoPhone,
    requerido_mediador_name: requeridoMediadorName,
    requerido_mediador_mat: requeridoMediadorMat,

    //Tercero

    tercero_name: terceroName,
    tercero_dni: terceroDni,
    tercero_adress: terceroAdress,
    tercero_cp: terceroCp,
    tercero_phoneNumber: terceroPhoneNumber,
    tercero_cellPhone: terceroCellPhone,
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

module.exports = { generateActaAudienciaVirt };

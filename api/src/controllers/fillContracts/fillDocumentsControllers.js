const fs = require("fs");
const path = require("path");
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");

const generateDocument10 = (data) => {
  console.log(data);

  // Ruta al archivo de plantilla
  const templatePath = path.join(
    __dirname,
    "1-0- CONV.CONFIDENCIALIDAD JUD VIRTUAL1b_template.docx"
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

  const requirenteName = data.requirente?.name || "Sin Definir";
  const requirenteDni = data.requirente?.dni || "00.000.000";
  const requeridoName = data.requerido?.name || "Sin Definir";
  const reuqeridoDni = data.requerido?.dni || "00.000.000";

  doc.setData({
    expediente: data.expediente || "Sin Definir",
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

const generateDocument11 = (data) => {
  console.log(data);

  // Ruta al archivo de plantilla
  const templatePath = path.join(
    __dirname,
    "1-1- ACTA AUDIENCIA VIRTUAL CJM 2b_template.docx"
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

  const requirenteName = data.requirente?.name || "Sin Definir";
  const requirenteDni = data.requirente?.dni || "00.000.000";
  const requirenteAdress = data.requirente?.adress || "Sin Definir";
  const requirenteMail = data.requirente?.email || "Sin Definir";
  const requirenteCelPhone = data.requirente?.phoneNumber || "Sin Definir";
  const requirenteLetrado = data.requirente?.letrado.name || "Sin Definir";
  const requirenteLetradoAdress =
    data.requirente?.letrado.adress || "Sin Definir";
  const requirenteLetradoMail =
    data.requirente?.letrado.email || "sindefinir@mail.com";
  const requirenteLetradoPhone =
    data.requirente?.letrado.phoneNumber || "Sin definir";
  const requirenteMediador = data.requirente?.mediador.name || "Sin Definir";
  const requirenteMediadorMat = data.requirente?.mediador.mat || "Sin Definir";
  const requeridoName = data.requerido?.name || "Sin Definir";
  const requeridoDni = data.requerido?.dni || "00.000.000";
  const requeridoAdress = data.requerido?.adress || "Sin Definir";
  const requeridoMail = data.requerido?.email || "Sin Definir";
  const requeridoCelPhone = data.requerido?.phoneNumber || "Sin Definir";
  const requeridoLetrado = data.requerido?.letrado.name || "Sin Definir";
  const requeridoLetradoAdress =
    data.requerido?.letrado.adress || "Sin Definir";
  const requeridoLetradoMail =
    data.requerido?.letrado.email || "sindefinir@mail.com";
  const requeridoLetradoPhone =
    data.requerido?.letrado.phoneNumber || "Sin definir";
  const requeridoMediador = data.requerido?.mediador.name || "Sin Definir";
  const requeridoMediadorMat = data.requerido?.mediador.mat || "Sin Definir";
  const terceroName = data.tercero?.name || "Sin Definir";
  const terceroDni = data.tercero?.dni || "00.000.000";
  const terceroAdress = data.tercero?.adress || "Sin Definir";
  const terceroCp = data.tercero?.cp || "0000";
  const terceroPhoneNumber = data.tercero?.phoneNumber || "Sin Definir";
  const terceroCellPhone = data.tercero?.cellPhone || "Sin Definir";

  doc.setData({
    expediente: data.expediente || "Sin Definir",
    number: data.number || "00000",
    date: data.date || "Sin definir",
    hour: data.hour || "00:00",
    start: data.start || "00:00",
    end: data.end || "00:00",
    nextDate: data.nextDate || "Sin definir",
    requirente_name: requirenteName,
    requirente_dni: requirenteDni,
    requirente_adress: requirenteAdress,
    requirente_email: requirenteMail,
    requirente_phoneNumber: requirenteCelPhone,
    requirente_letrado_name: requirenteLetrado,
    requirente_letrado_legalAdress: requirenteLetradoAdress,
    requirente_letrado_letradoEmail: requirenteLetradoMail,
    requirente_letrado_phoneNumber: requirenteLetradoPhone,
    mediador_requirente_name: requirenteMediador,
    mediador_requirente_matricula: requirenteMediadorMat,
    requerido_name: requeridoName,
    requerido_dni: requeridoDni,
    requerido_adress: requeridoAdress,
    requerido_email: requeridoMail,
    requerido_phoneNumber: requeridoCelPhone,
    requerido_letrado_name: requeridoLetrado,
    requerido_letrado_adress: requeridoLetradoAdress,
    requerido_letrado_email: requeridoLetradoMail,
    requerido_letrado_phoneNumber: requeridoLetradoPhone,
    mediador_requerido_name: requeridoMediador,
    mediador_requerido_matricula: requeridoMediadorMat,
    tercero_name: terceroName,
    tercero_dni: terceroDni,
    tercero_adress: terceroAdress,
    tercero_cp: terceroCp,
    tercero_phoneNumber: terceroPhoneNumber,
    tercero_movilNumber: terceroCellPhone,
    adress_mediacion: data.adressMediacion || "Sin Definir",
    mediacion_email: data.emailMediacion || "Sin Definir",
    abogado_patrocinante: data.abogadoPatrocinante || "Sin Definir",
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

module.exports = { generateDocument11, generateDocument10 };

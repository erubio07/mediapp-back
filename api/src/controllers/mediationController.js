const { Mediation } = require("../db");

const createMediation = async (data, userId) => {
  try {
    if (!userId) {
      throw new Error("Usuario no identificado");
    }

    if (!data.expediente) {
      throw new Error("El expediente es obligatorio");
    }

    if (!data.number) {
      throw new Error("El número de mediación es obligatorio");
    }

    const mediation = await Mediation.create({
      expediente: data.expediente,
      number: data.number,

      date: data.date || null,
      hour: data.hour || null,
      start: data.start || null,
      end: data.end || null,
      nextDate: data.nextDate || null,

      adressMediacion: data.adressMediacion || null,

      abogadoPatrocinante: data.abogadoPatrocinante || null,

      abogadoPatrocinanteMat: data.abogadoPatrocinanteMat || null,

      requirente: data.requirente || {},

      requerido: data.requerido || {},

      tercero: data.tercero || {},

      status: data.status || "draft",

      UserId: userId,
    });

    return mediation;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { createMediation };

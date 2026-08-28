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

const updateMediation = async (mediationId, data, userId) => {
  try {
    if (!userId) {
      throw new Error("Usuario no identificado");
    }

    const mediation = await Mediation.findOne({
      where: {
        id: mediationId,
        UserId: userId,
      },
    });

    if (!mediation) {
      throw new Error("Mediación no encontrada");
    }

    await mediation.update({
      expediente: data.expediente ?? mediation.expediente,

      number: data.number ?? mediation.number,

      date: data.date ?? mediation.date,

      hour: data.hour ?? mediation.hour,

      start: data.start ?? mediation.start,

      end: data.end ?? mediation.end,

      nextDate: data.nextDate ?? mediation.nextDate,

      adressMediacion: data.adressMediacion ?? mediation.adressMediacion,

      abogadoPatrocinante:
        data.abogadoPatrocinante ?? mediation.abogadoPatrocinante,

      abogadoPatrocinanteMat:
        data.abogadoPatrocinanteMat ?? mediation.abogadoPatrocinanteMat,

      requirente: data.requirente ?? mediation.requirente,

      requerido: data.requerido ?? mediation.requerido,

      tercero: data.tercero ?? mediation.tercero,

      status: data.status ?? mediation.status,
    });

    return mediation;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getMediationByNumber = async (number, userId) => {
  try {
    if (!userId) {
      throw new Error("Usuario no identificado");
    }

    if (!number) {
      throw new Error("El número de mediacion es obligatorio");
    }

    const mediation = await Mediation.findOne({
      where: {
        number: number,
        UserId: userId,
      },
    });

    if (!mediation) {
      throw new Error("Mediación no encontrada");
    }

    return mediation;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserMediations = async (userId) => {
  try {
    if (!userId) {
      throw new Error("Usuario no identificado");
    }

    const mediations = await Mediation.findAll({
      where: {
        UserId: userId,
      },
      order: [["updatedAt", "DESC"]],
    });

    return mediations;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createMediation,
  updateMediation,
  getMediationByNumber,
  getUserMediations,
};

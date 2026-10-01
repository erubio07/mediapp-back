const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Mediation",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      expediente: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      number: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },

      hour: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      start: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      end: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      nextDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },

      adressMediacion: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      abogadoPatrocinante: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      abogadoPatrocinanteMat: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      requirente: {
        type: DataTypes.JSONB,
        allowNull: false,
        defaultValue: {},
      },

      requerido: {
        type: DataTypes.JSONB,
        allowNull: false,
        defaultValue: {},
      },

      tercero: {
        type: DataTypes.JSONB,
        allowNull: true,
        defaultValue: {},
      },

      status: {
        type: DataTypes.ENUM("draft", "in_progress", "completed", "archived"),
        allowNull: false,
        defaultValue: "draft",
      },
    },
    {
      timestamps: true,
      paranoid: true,

      indexes: [
        {
          fields: ["expediente"],
        },
        {
          fields: ["status"],
        },
        {
          fields: ["UserId"],
        },
        {
          unique: true,
          fields: ["UserId", "expediente"],
        },
      ],
    },
  );
};

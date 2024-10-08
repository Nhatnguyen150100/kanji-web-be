"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Kanji extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Kanji.hasMany(models.ExampleKanji, {
        foreignKey: "idKanji",
        sourceKey: "id",
        as: "exampleKanjis",
        onDelete: "CASCADE",
        hooks: true,
      });
    }
  }
  Kanji.init(
    {
      id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      character: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      level: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      meaning: DataTypes.TEXT,
      chinaMeaning: DataTypes.TEXT,
      mnemonic: DataTypes.TEXT,
      onReading: DataTypes.STRING,
      kunReading: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Kanji",
    }
  );
  return Kanji;
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ExampleKanji extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ExampleKanji.belongsTo(models.Kanji, {
        foreignKey: { name: "idKanji", allowNull: false },
        targetKey: "id",
      });
    }
  }
  ExampleKanji.init(
    {
      id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      idKanji: DataTypes.UUID,
      example: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "ExampleKanji",
    }
  );
  return ExampleKanji;
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Exam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Exam.hasMany(models.Question, {
        foreignKey: "idExam",
        sourceKey: "id",
        as: "questions",
      });
      Exam.hasMany(models.UserExam, {
        foreignKey: "idExam",
        sourceKey: "id",
      });
    }
  }
  Exam.init(
    {
      id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      name: DataTypes.STRING,
      timeFinish: DataTypes.INTEGER,
      level: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Exam",
    }
  );
  return Exam;
};

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Question.belongsTo(models.Exam, {
        foreignKey: { name: "idExam", allowNull: false },
        targetKey: "id",
      });
    }
  }
  Question.init({
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    idExam: DataTypes.UUID,
    content: DataTypes.STRING,
    order: DataTypes.INTEGER,
    options: DataTypes.TEXT,
    correctAnswer: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
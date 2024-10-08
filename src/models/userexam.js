'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserExam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserExam.belongsTo(models.User, {
        foreignKey: { name: "idUser", allowNull: false },
        targetKey: "id",
      });
      UserExam.belongsTo(models.Exam, {
        foreignKey: { name: "idExam", allowNull: false },
        targetKey: "id",
        as: 'exams'
      });
    }
  }
  UserExam.init({
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    idExam: DataTypes.UUID,
    idUser: DataTypes.UUID,
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserExam',
  });
  return UserExam;
};
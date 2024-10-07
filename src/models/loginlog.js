'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LoginLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      LoginLog.belongsTo(models.User, {
        foreignKey: { name: "idUser", allowNull: false },
        targetKey: "id",
      });
    }
  }
  LoginLog.init({
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    idUser: DataTypes.UUID,
    logTime: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'LoginLog',
  });
  return LoginLog;
};
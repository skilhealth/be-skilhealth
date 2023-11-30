'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_kredensial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_kredensial.hasOne(models.User, { foreignKey: 'kredensial_id'});
    }
  }
  User_kredensial.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: {
      type: DataTypes.ENUM('pasien', 'dokter', 'admin'),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User_kredensial',
    freezeTableName: true
  });
  return User_kredensial;
};
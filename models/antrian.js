'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Antrian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Antrian.init({
    status: DataTypes.BOOLEAN,
    token: DataTypes.BIGINT,
    keterangan: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Antrian',
  });
  return Antrian;
};
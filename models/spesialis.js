'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spesialis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Spesialis.init({
    nama: DataTypes.STRING,
    keterangan: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Spesialis',
  });
  return Spesialis;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dokter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dokter.init({
    nama: DataTypes.STRING,
    deskripsi: DataTypes.TEXT,
    skd: DataTypes.STRING,
    pengalaman: DataTypes.JSON,
    pendidikan: DataTypes.JSON,
    no_tlp: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    images: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dokter',
  });
  return Dokter;
};
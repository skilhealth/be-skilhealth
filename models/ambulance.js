'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ambulance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ambulance.belongsTo(models.Instansi, {foreignKey: "instansi_id", onDelete: 'CASCADE'});
      Ambulance.hasOne(models.Respon, { foreignKey: 'ambulan_id'});
    }
  }
  Ambulance.init({
    nama: DataTypes.STRING,
    plat: DataTypes.STRING,
    tingkat: DataTypes.ENUM('biasa', 'darurat'),
    paramedis: DataTypes.TEXT,
    peralatan: DataTypes.TEXT,
    instansi_id: DataTypes.INTEGER,
    image:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Ambulance',
    freezeTableName: true
  });
  return Ambulance;
};
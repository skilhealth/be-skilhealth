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
      Dokter.hasMany(models.Jadwal, { foreignKey: 'dokter_id' });
      Dokter.hasMany(models.Forum, {foreignKey: 'dokter_id'})
      Dokter.belongsTo(models.Spesialis, {foreignKey: "spesialis_id", onDelete: 'CASCADE'});
      Dokter.belongsTo(models.Instansi, {foreignKey: 'instansi_id' , onDelete: 'CASCADE'});
    }
  }
  Dokter.init({
    nama: DataTypes.STRING,
    spesialis_id: DataTypes.BIGINT,
    instansi_id: DataTypes.BIGINT,
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
    freezeTableName: true
  });
  return Dokter;
};
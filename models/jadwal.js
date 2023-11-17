'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jadwal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Jadwal.hasMany(models.Antrian, { foreignKey: 'jadwal_id' });
      Jadwal.belongsTo(models.Dokter, { foreignKey: 'dokter_id' });
    }
  }
  Jadwal.init({
    dokter_id: DataTypes.BIGINT,
    date: DataTypes.DATE,
    tipe: DataTypes.ENUM('reguler','daring','homecare'),
    keterangan: DataTypes.TEXT,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Jadwal',
    freezeTableName: true
  });
  return Jadwal;
};
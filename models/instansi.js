'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Instansi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Instansi.hasMany(models.Dokter, {foreignKey: 'instansi_id'})
      Instansi.hasMany(models.Ambulance,{foreignKey:'instansi_id'})
      Instansi.hasOne(models.Respon, { foreignKey: 'instansi_id'});
      Instansi.belongsTo(models.User_kredensial, { foreignKey: 'kredensial_id', onDelete: 'CASCADE' });
    }
  }
  Instansi.init({
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    no_tlp: DataTypes.STRING,
    area: DataTypes.STRING,
    email: DataTypes.STRING,
    image: DataTypes.STRING,
    kredensial_id:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Instansi',
    freezeTableName: true
  });
  return Instansi;
};
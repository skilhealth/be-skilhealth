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
      Dokter.hasMany(models.Request, {foreignKey: 'ambulance_id'})
    }
  }
  Ambulance.init({
    name: DataTypes.STRING,
    instansi_id: DataTypes.BIGINT,
    plat: DataTypes.STRING,
    category: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'ambulance',
  });
  return Ambulance;
};
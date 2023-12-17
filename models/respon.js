'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Respon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Respon.belongsTo(models.Ambulance, {foreignKey: "ambulan_id", onDelete: 'CASCADE'});
      Respon.belongsTo(models.Instansi, {foreignKey: "instansi_id", onDelete: 'CASCADE'});
      Respon.belongsTo(models.User, {foreignKey: "user_id", onDelete: 'CASCADE'});
    }
  }
  Respon.init({
    alamat: DataTypes.TEXT,
    tingkat: DataTypes.ENUM('biasa','darurat'),
    kejadian:DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    instansi_id: DataTypes.INTEGER,
    ambulan_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Respon',
    freezeTableName: true
  });
  return Respon;
};
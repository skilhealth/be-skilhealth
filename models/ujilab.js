'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ujilab extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ujilab.belongsTo(models.Dokter, { foreignKey: 'dokter_id' });
      ujilab.belongsTo(models.Antrian, { foreignKey: 'antrian_id' });
      ujilab.belongsTo(models.User, { foreignKey: 'user_id' });

    }
  }
  ujilab.init({
    antrian_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    dokter_id: DataTypes.INTEGER,
    judul: DataTypes.STRING,
    keluhan: DataTypes.TEXT,
    diagnosa: DataTypes.TEXT,
    catatan: DataTypes.TEXT,
    dokumen: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'ujilab',
  });
  return ujilab;
};
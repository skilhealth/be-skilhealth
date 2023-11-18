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
      Antrian.belongsTo(models.User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
      Antrian.belongsTo(models.Jadwal, { foreignKey: 'jadwal_id' });
    }
  }
  Antrian.init({
    user_id:DataTypes.BIGINT,
    jadwal_id:DataTypes.BIGINT,
    status: DataTypes.BOOLEAN,
    token: DataTypes.STRING,
    keterangan: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Antrian',
    freezeTableName: true
  });
  return Antrian;
};
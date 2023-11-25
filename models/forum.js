'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Forum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Forum.belongsTo(models.User, {foreignKey: 'user_id', onDelete: 'CASCADE'});
      Forum.belongsTo(models.Dokter, {foreignKey: 'dokter_id', onDelete: 'CASCADE'});
    }
  }
  Forum.init({
    user_id: DataTypes.BIGINT,
    dokter_id: DataTypes.BIGINT,
    judul: DataTypes.STRING,
    pertanyaan: DataTypes.TEXT,
    jawaban: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Forum',
  });
  return Forum;
};
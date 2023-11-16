'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.User_kredensial, { foreignKey: 'kredensial_id', onDelete: 'CASCADE' });
      User.hasMany(models.Antrian, { foreignKey: 'user_id' });
    }
  }
  User.init({
    nama: DataTypes.STRING,
    tgl_lahir: DataTypes.DATE,
    jenis_kelamin: {
      type: DataTypes.ENUM('laki-laki', 'perempuan'),
      allowNull: false
    },
    no_tlp: DataTypes.STRING,
    kredensial_id: DataTypes.BIGINT,
    images: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
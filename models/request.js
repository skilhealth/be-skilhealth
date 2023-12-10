'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Request.init({
    req_id: DataTypes.STRING,
    ambulance_id: DataTypes.BIGINT,
    instansi_id: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'request',
  });
  return Request;
};
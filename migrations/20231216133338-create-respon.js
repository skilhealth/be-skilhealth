'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Respon', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      alamat: {
        type: Sequelize.TEXT
      },
      tingkat: {
        type: Sequelize.ENUM,
        values: ['biasa', 'darurat'], 
      },
      kejadian:{
        type:Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      instansi_id: {
        type: Sequelize.INTEGER
      },
      ambulan_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Respon');
  }
};
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ambulance', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      plat: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tingkat: {
        type: Sequelize.ENUM,
        values: ['biasa', 'darurat'], 

      },
      paramedis: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      peralatan: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      instansi_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable('Ambulance');
  }
};
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('jadwal', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dokter_id: {
        allowNull:false,
        type: Sequelize.BIGINT
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      tipe: {
        type: Sequelize.ENUM,
        values: ['reguler', 'daring', 'homecare'], 
        allowNull: false
      },
      keterangan: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      harga:{
        type: Sequelize.BIGINT
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
    await queryInterface.dropTable('jadwal');
  }
};
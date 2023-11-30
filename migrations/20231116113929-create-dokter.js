'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Dokter', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kredensial_id: {
        type: Sequelize.INTEGER
      },
      nama: {
        allowNull: false,
        type: Sequelize.STRING
      },
      spesialis_id: {
        allowNull:false,
        type:Sequelize.BIGINT
      },
      instansi_id: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      deskripsi: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      skd: {
        allowNull: false,
        type: Sequelize.STRING
      },
      pengalaman: {
        allowNull: false,
        type: Sequelize.JSON
      },
      pendidikan: {
        allowNull: false,
        type: Sequelize.JSON
      },
      no_tlp: {
        allowNull: false,
        type: Sequelize.STRING
      },
      status: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      images: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Dokter');
  }
};
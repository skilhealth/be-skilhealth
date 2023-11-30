'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        allowNull: false,
        type: Sequelize.STRING
      },
      tgl_lahir: {
        allowNull: false,
        type: Sequelize.DATE
      },
      jenis_kelamin: {
        type: Sequelize.ENUM,
        values: ['laki-laki', 'perempuan'], 
        allowNull: false
      },
      no_tlp: {
        allowNull: false,
        type: Sequelize.STRING
      },
      kredensial_id: {
        allowNull: false,
        type: Sequelize.BIGINT
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
    await queryInterface.dropTable('User');
  }
};
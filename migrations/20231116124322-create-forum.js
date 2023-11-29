'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('forum', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      dokter_id: {
        type: Sequelize.BIGINT
      },
      judul: {
        allowNull: false,
        type: Sequelize.STRING
      },
      pertanyaan: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      jawaban: {
        type: Sequelize.TEXT
      },
      status: {
        allowNull: false,
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('forum');
  }
};
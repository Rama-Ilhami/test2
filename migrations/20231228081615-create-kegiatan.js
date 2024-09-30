'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('kegiatans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tanggal: {
        type: Sequelize.STRING
      },
      tipe: {
        type: Sequelize.STRING
      },
      shift: {
        type: Sequelize.STRING
      },
      jam: {
        type: Sequelize.INTEGER
      },
      namaMesin: {
        type: Sequelize.STRING
      },
      namaSparepart: {
        type: Sequelize.STRING
      },
      kegiatan: {
        type: Sequelize.STRING
      },
      proses: {
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
    await queryInterface.dropTable('kegiatans');
  }
};
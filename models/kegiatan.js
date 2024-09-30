'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kegiatan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kegiatan.init({
    tanggal: DataTypes.STRING,
    tipe: DataTypes.STRING,
    shift: DataTypes.STRING,
    jam: DataTypes.INTEGER,
    namaMesin: DataTypes.STRING,
    namaSparepart: DataTypes.STRING,
    kegiatan: DataTypes.STRING,
    proses: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'kegiatan',
  });
  return kegiatan;
};
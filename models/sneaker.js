'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sneaker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sneaker.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    variant: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    approved: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Sneaker',
  });
  return Sneaker;
};
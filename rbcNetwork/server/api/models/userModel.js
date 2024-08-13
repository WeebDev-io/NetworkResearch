const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const User = sequelize.define('users', {
  id:{type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true,allowNull: false},
  username: {type: DataTypes.STRING,allowNull: false,unique: false},
  password: {type: DataTypes.STRING,allowNull: false,},
  createdAt: {type: DataTypes.DATE,allowNull: false,defaultValue: DataTypes.NOW,},
  updatedAt: {type: DataTypes.DATE,allowNull: false,defaultValue: DataTypes.NOW,},
});
sequelize.sync();
module.exports = User;
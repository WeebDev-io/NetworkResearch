const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const Profile = sequelize.define('profile',{
  id:{type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true,allowNull: false},
  username:{type:DataTypes.STRING,allowNull:false},
  name:{type:DataTypes.STRING,allowNull:false},
  username:{type:DataTypes.STRING,allowNull:false},
  dob:{type:DataTypes.STRING,allowNull:false},
  fos:{type:DataTypes.STRING,allowNull:false},
  fosr:{type:DataTypes.STRING,allowNull:false},
  email:{type:DataTypes.STRING,allowNull:false},
  image:{type:DataTypes.STRING,allowNull:false},
  everyone:{type:DataTypes.BOOLEAN,allowNull:false},
  friends:{type:DataTypes.BOOLEAN,allowNull:false},
  team:{type:DataTypes.BOOLEAN,allowNull:false},
  edu:{type:DataTypes.JSON,allowNull:false},
  work:{type:DataTypes.JSON,allowNull:false},
  loc:{type:DataTypes.STRING,allowNull:false},
  le:{type:DataTypes.JSON,allowNull:false},
  wr:{type:DataTypes.STRING,allowNull:false},
  wexp:{type:DataTypes.STRING,allowNull:false},
})
sequelize.sync();
module.exports = Profile;
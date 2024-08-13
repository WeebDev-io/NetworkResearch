const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const Portfolio = sequelize.define('portfolio',{
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
  skills:{type:DataTypes.JSON,allowNull:false},
  hobbies:{type:DataTypes.JSON,allowNull:false},
  links:{type:DataTypes.JSON,allowNull:false},
  additionalInfo:{type:DataTypes.STRING,allowNull:false},
})
sequelize.sync();
module.exports = Portfolio;
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('rbcnetwork', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
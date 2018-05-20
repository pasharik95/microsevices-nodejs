var config = require('../config')
var Sequelize = require('sequelize')
var db = {}

const sequelize = new Sequelize(config.db.name, config.db.username, config.db.password, {
  dialect: 'postgres',
  operatorsAliases: Sequelize.Op,
  host: config.db.host,
  define: {
    underscored: true,
  },
});

var model = sequelize['import']('./book');
db[model.name] = model;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

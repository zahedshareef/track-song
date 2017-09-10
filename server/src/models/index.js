const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.option
)

// sequelize.authenticate().then(function() {
//   console.log('Database connected and authenticated!');
//   return true;
// }).catch(function(err) {
//   console.error('Failed to connect and authenticate', err);
//   return false;
// })

fs
  .readdirSync(__dirname)
  .filter((file) =>
    (file.indexOf(".") !== 0) && (file !== 'index.js') && (file.slice(-3) === '.js')
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
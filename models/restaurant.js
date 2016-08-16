var Sequelize = require('sequelize');
var db = require('./_db');


var Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING
  },
  cuisine: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER
  }
});

module.exports = Restaurant;
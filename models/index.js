var Sequelize = require('sequelize');
var db = require('./_db');

var Hotel = require('./hotel');
var Activity = require('./activity');
var Restaurant = require('./restaurant');
var Place = require('./place');

Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);

module.exports = db;
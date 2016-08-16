var Promise = require('bluebird');
var express = require('express');
var router = express.Router();
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');

router.get('/', function(req, res, next){
  var promises = [
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll()
    ];
  Promise.all(promises)
  .then(function(array){
    var renderObj = {
      hotels: array[0],
      restaurants: array[1],
      activities: array[2]
    }
    res.render('index', renderObj);
  });
});

module.exports = router;
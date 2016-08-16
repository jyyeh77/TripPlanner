'use strict';
var express = require('express');
var router = express.Router();
var models = require('../models');
var Promise = require('bluebird');
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;

router.get('/', function(req, res, next){
  var currentState = {};

  var hotels = Hotel.findAll();
  var restaurants = Restaurant.findAll();
  var activities = Activity.findAll();

  Promise.all([hotels, restaurants, activities])
    .then(function(contents){

      currentState.dbHotels = contents[0];
      currentState.dbRestaurants = contents[1];
      currentState.dbActivities = contents[2];

      res.render('index', {templateHotels: currentState.dbHotels, templateRestaurants: currentState.dbRestaurants, templateActivities: currentState.dbActivities});
    })
    .catch(next);
})

module.exports = router;

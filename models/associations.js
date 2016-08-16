var Sequelize = require('sequelize');
var Hotel = require('./Hotel');
var Restaurant = require('./Restaurant');
var Activity = require('./Activity');
var Place = require('./Place');


Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

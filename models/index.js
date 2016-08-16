//  Creates associations with Place database and exports for tripplanner-seed.js to use

var Sequelize = require('sequelize');
var Hotel = require('./Hotel');
var Restaurant = require('./Restaurant');
var Activity = require('./Activity');
var Place = require('./Place');


Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = {
  Hotel: Hotel,
  Restaurant: Restaurant,
  Activity: Activity,
  Place: Place
}

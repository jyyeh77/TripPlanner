var db = require('./database');
var Sequelize = require('sequelize');

var Hotel = db.define("hotel", {
	name: {
		type:Sequelize.STRING,
		allowNull:false
	},
	num_starts:{
		type:Sequelize.INTEGER,
		allowNull:false
	},
	amenities:{
		type:Sequelize.STRING,
		allowNull:false,
		isArray:true
	}

});


module.exports = {
	Hotel: Hotel
}

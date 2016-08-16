var db = require('./database');
var Sequelize = require('sequelize');

var Restaurant = db.define("restaurant", {
	name:{
		type:Sequelize.STRING,
		allowNull:false
	},
	cuisine:{
		type:Sequelize.STRING,
		allowNull:false
	},
	price:{
		type:Sequelize.INTEGER,
		allowNull:false,
		validate:{
			min: 1, max:10000
		}
	}
});

module.exports = {
	Restaurant: Restaurant
}

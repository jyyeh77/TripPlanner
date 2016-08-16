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
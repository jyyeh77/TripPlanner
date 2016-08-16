var Activity = db.define("activity", {
	name:{
		type:Sequelize.TEXT,
		allowNull:false
	},
	age_range:{
		type:Sequelize.TEXT,
		allowNull:false
	}

});
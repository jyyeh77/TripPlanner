var Place = db.define("place", {
	address: {
		type:Sequelize.STRING,
		allowNull:false
	},
	city:{
		type:Sequelize.STRING,
		allowNull:false
	},
	state:{
		type:Sequelize.STRING,
		allowNull:false
	},
	phone:{
		type:Sequelize.STRING,
		allowNull:false
	},
	location:{
		type:Sequelize.STRING,
		allowNull:false
	}

});
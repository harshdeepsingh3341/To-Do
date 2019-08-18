const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
	{
		name: {
			type: mongoose.Schema.Types.String,
			required: true
		},
		email: {
			type:mongoose.Schema.Types.String,
			required: true,
			index: true,
			unique: true
		},
		password: {
			type:mongoose.Schema.Types.String,
			required:true
		}
	},
	{
		timestamps: true
	}
);

const userModel = mongoose.model("User", userSchema);

exports.initUser = () => {
	const user = new userModel({
		name: 'Harshdeep Singh',
		email: 'harshdeep.singh@tothenew.com',
		password: '123'
	});
	user.save();
};

exports.getUser = (email) => {
	return userModel.findOne(
		{
			email
		}
	)
};

exports.saveUser = (user) => {
	const newUser = new userModel({...user});
	return newUser.save();
};
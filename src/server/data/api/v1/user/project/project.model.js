const mongoose = require('mongoose');

const projectSchema = mongoose.Schema(
	{
		name: {
			type: mongoose.Types.String,
			required: true
		},
		user_id: {
			type: mongoose.Types.ObjectId
		}
	}
);
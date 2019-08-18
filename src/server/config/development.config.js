module.exports = {
	MONGODB_URL: process.env.NODE_ENV === 'production' ?
		'':
		'mongodb://localhost:27017/todoGraphql',
	ENCRYPTION_SECRET:"###qwerty@todolist##@@author:&&Harshdeep&*%Singh###",
	API_STATUS_CODE_MESSAGES: {
		"200": "success"
	}
};
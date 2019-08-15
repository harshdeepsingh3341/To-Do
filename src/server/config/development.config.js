module.exports = {
	MONGODB_URL: process.env.NODE_ENV === 'production' ?
		'':
		'mongodb://localhost:27017/todoGraphql'
};
const user = require('./data/api/v1/user');

module.exports = (app) => {
	// app.use('/api/graphql', (req, res, next) => {
	// 	console.log('graphql');
	// });
	app.use('/api/v1/user', user);
};
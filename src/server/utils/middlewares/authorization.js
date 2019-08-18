const {getUser} = require("../../data/api/v1/user/user.model");
const {getPayload} = require("../services/jwt.service");

module.exports = async (req, res, next) => {
	console.log('authorizations header', req.headers);
	try {
		const token = req.headers.authorization.split('Bearer ')[1];
		const {email} = getPayload(token);
		console.log('authorizations token ', getPayload(token));
		const user = await getUser(email);
		console.log('authorization user', user);
		req.user = user;
		next();
	} catch (e) {
		res.send({
			status: 401,
			message: 'unauthorized',
			data: {
				unauthorized: true
			}
		});
	}
};
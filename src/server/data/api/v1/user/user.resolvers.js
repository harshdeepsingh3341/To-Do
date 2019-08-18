const _ = require('lodash');
const {decryptData} = require("../../../../utils/services/encryption.service");
const {API_STATUS_CODE_MESSAGES} = require("../../../../config/development.config");
const {saveUser} = require("./user.model");
const {getUser} = require("./user.model");
const {
	getToken
} = require('../../../../utils/services/jwt.service.js');
const {encryptData} = require('../../../../utils/services/encryption.service');
exports.resolvers = {
	Query: {
		loginUser: async (root, args) => {
			const {
				email,
				password
			} = args;
			try {
				const user = await getUser(email);
				if (
					_.isEqual(user.email, email) &&
					_.isEqual(decryptData(user.password).password, password)
				) {
					return {
						status: 200,
						message: "success",
						data: JSON.stringify({
							isVerified: true,
							name: user.name,
							email: user.email,
							token: getToken({
								email: user.email
							})
						})
					}
				} else {
					return {
						status: 200,
						message: API_STATUS_CODE_MESSAGES[200],
						data: JSON.stringify({
							isVerified: false
						})
					}
				}
			} catch (err) {
				console.log('login err', err);
			}
			return "hello";
		}
	},
	Mutation: {
		signupUser: async (root, args) => {
			console.log('signupUser mutation ', 'root, args, context, info', args);
			const {
				name,
				email
			} = args;
			let {
				password
			} = args;
			password = encryptData({password});
			try{
				const newUser = await saveUser({
					name,
					email,
					password
				});
				if(newUser) {
					console.log('newUser ', newUser, newUser._doc);
					return {
						status: 200,
						message: API_STATUS_CODE_MESSAGES[200],
						data: JSON.stringify({
							signUpUser: true
						})
					}
				}
			} catch (e) {
				console.log('signup error', e);
			}
		}
	}
};
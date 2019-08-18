const fs = require('fs');
const jwt = require("jsonwebtoken");

const jwtConfig = {
	issuer: "To The New",
	subject: "harshdeep.singh@tothenew.com",
	audience: "`http://tothenew.com`",
	expiresIn: "12h",
	algorithm: "RS256"
}

const publicKey = fs.readFileSync(
	'./utils/keys/public.key',
	{
		encoding: 'utf-8'
	}
);
const privateKey = fs.readFileSync(
	'./utils/keys/private.key',
	{
		encoding: 'utf-8'
	}
);

const signOptions = {
	issuer: jwtConfig.issuer,
	subject: jwtConfig.subject,
	audience: jwtConfig.audience,
	expiresIn: jwtConfig.expiresIn,
	algorithm: jwtConfig.algorithm
};

const verifyOptions = {
	issuer: jwtConfig.issuer,
	subject: jwtConfig.subject,
	audience: jwtConfig.audience,
	expiresIn: jwtConfig.expiresIn,
	algorithm: [jwtConfig.algorithm]
}

exports.getToken = (payload) => {
	const token = jwt.sign(payload, privateKey, signOptions);
	return token;
};

exports.getPayload = (token) => {
	const payload = jwt.verify(token, publicKey, verifyOptions);
	return payload;
};
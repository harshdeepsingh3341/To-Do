const {ENCRYPTION_SECRET} = require("../../config/development.config");
const CryptoJS = require('crypto-js');

exports.encryptData = (data) => {
	if (typeof data !== 'object') {
		throw new Error("Object needed as argument")
	}
	const gibberish = CryptoJS.AES.encrypt(
		JSON.stringify(data),
		ENCRYPTION_SECRET
	);
	return gibberish.toString();
};

exports.decryptData = (cipherText) => {
	const bytes = CryptoJS.AES.decrypt(cipherText.toString(), ENCRYPTION_SECRET);
	const string = bytes.toString(CryptoJS.enc.Utf8);
	return JSON.parse(string);
};
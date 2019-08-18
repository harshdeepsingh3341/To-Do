exports.logger = (req, res, next) => {
	console.log(`Request received on ${req.url}, with method ${req.method}`);
	next();
};
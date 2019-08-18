const router = require('express').Router();
const graphqlHTTP = require('express-graphql');
const authorization = require('../../../../utils/middlewares/authorization');

const userSchema = require('./user.schema');
const {initUser} = require("./user.model");

router.get(
	'/initUser',
	(req, res, next) => {
		initUser();
	}
);

router.post('/login',
	graphqlHTTP({
		schema: userSchema,
		graphiql: true
	})
);

router.post('/signup',
	graphqlHTTP({
		schema: userSchema,
		graphiql: true
	})
);

router.use('*',
	authorization,
	graphqlHTTP({
		schema: userSchema,
		graphiql: true
	})
);

module.exports = router;
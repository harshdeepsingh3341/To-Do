const router = require('express').Router();
const graphqlHTTP = require('express-graphql');
const {buildSchema} = require('graphql');
const {
	makeExecutableSchema
} = require('graphql-tools');
const fs = require('fs');
const authorization = require('../../../../utils/authorization');

const userSchema = require('./user.schema');
const {initUser} = require("./user.model");

router.get(
	'/initUser',
	(req, res, next) => {
		initUser();
	}
);

router.use('/login',
	graphqlHTTP({
		schema: userSchema,
		graphiql: true
	})
)

router.use('*',
	authorization,
	graphqlHTTP({
		schema: userSchema,
		graphiql: true
	})
);

module.exports = router;
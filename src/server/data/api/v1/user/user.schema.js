const {
	makeExecutableSchema
} = require('graphql-tools');
const fs = require('fs');
const {
	resolvers
} = require('./user.resolvers');

const typeDefs = fs.readFileSync(
	'./data/api/v1/user/user.schema.graphql',
	{
		encoding: 'utf-8'
	}
);

module.exports = makeExecutableSchema({
	typeDefs,
	resolvers
});
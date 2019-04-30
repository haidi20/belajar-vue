const { ApolloServer, gql } = require("apollo-server");
const mongoose = require('mongoose');

require('dotenv').config({ path: 'variable.env' });

mongoose
	.connect(
		process.env.MONGO_URI,
		{ useNewUrlParser: true }
	)
	.then(() => console.log('DB conected mantul'))
	.catch(err => console.error(err));

const typeDefs = gql`
	type Todo {
		task: String
		completed: Boolean
	}

	type Query { 
		getTodos: [Todo]
	}
`

const server = new ApolloServer({
	typeDefs
});

server.listen().then(({ url }) => {
	console.log(`server listening ${url}`);
});
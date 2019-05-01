const { ApolloServer, gql } = require("apollo-server");
const mongoose = require('mongoose');

require('dotenv').config({ path: 'variable.env' });
const User = require('./models/User');
const Post = require('./models/Post');

mongoose
	.connect(
		process.env.MONGO_URI,
		{ useNewUrlParser: true }
	)
	.then(() => console.log('DB conected mantul'))
	.catch(err => console.error(err));

// Set useCreateIndex
mongoose.set('useCreateIndex', true);

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
	typeDefs,
	context: {
		User, Post
	}
});

server.listen().then(({ url }) => {
	console.log(`server listening ${url}`);
});
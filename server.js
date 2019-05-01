const { ApolloServer } = require("apollo-server");
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');


// import typeDefs and resolvers
const filePath = path.join(__dirname, 'typeDefs.gql');
const typeDefs = fs.readFileSync(filePath, 'utf-8');
const resolvers = require('./resolvers');

// import environtment variables and mongoose models
require('dotenv').config({ path: 'variable.env' });
const User = require('./models/User');
const Post = require('./models/Post');

// connect to Mlab database
mongoose
	.connect(
		process.env.MONGO_URI,
		{ useNewUrlParser: true }
	)
	.then(() => console.log('DB conected mantul'))
	.catch(err => console.error(err));

// Set useCreateIndex
mongoose.set('useCreateIndex', true);


// create Apollo/GraphQl server using typeDefs, resolvers, and context object
const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: {
		User, Post
	}
});

server.listen().then(({ url }) => {
	console.log(`server listening ${url}`);
});
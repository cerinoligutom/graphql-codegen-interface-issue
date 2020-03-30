const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
	interface Node {
		id: ID!
	}

	type Book implements Node {
		id: ID!
		title: String
		author: String
	}

	type Query {
		books: [Book]
	}
`;

const books = [
	{
		title: "Harry Potter and the Chamber of Secrets",
		author: "J.K. Rowling"
	},
	{
		title: "Jurassic Park",
		author: "Michael Crichton"
	}
];

const resolvers = {
	Query: {
		books: () => books
	}
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen(3000).then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});

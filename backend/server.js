const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const app = express();

const schema = gql`
  type Query {
    me: User
  }
  type User {
    username: String!
  }
`;

const resolvers = {
  Query: {
    me: () => {
      return {
        username: 'Robin Wieruch',
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen(4000, () => console.log('Express server running on port 4000'));

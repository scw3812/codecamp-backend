import { ApolloServer, gql } from 'apollo-server';
import { checkValidationPhone, sendTokenToSMS, getToken } from './phone.js';

const typeDefs = gql`
  type Query {
    hello: String
  }
  type Mutation {
    createTokenOfPhone(phoneNumber: String): String
  }
`

const resolvers = {
  Query: {
    hello: () => 'hello',
  },
  Mutation: {
    createTokenOfPhone: (_, args) => {
      if (checkValidationPhone(args.phoneNumber)) {
        return sendTokenToSMS(getToken(6));
      }
      return 'error';
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(3001).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
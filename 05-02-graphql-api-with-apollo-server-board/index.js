import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  input BoardRequest {
    writer: String
    title: String
    contents: String
  }
  type BoardResponse {
    number: Int
    writer: String
    title: String
    contents: String
  }
  type Query {
    fetchBoards: [BoardResponse]
  }
  type Mutation {
    createBoard(
      writer: String
      title: String
      contents: String
    ): BoardResponse
    createBoard2(board: BoardRequest): BoardResponse
  }
`

const resolvers = {
  Query: {
    fetchBoards: () => {
      return [
        { number: 1, writer: '철수', title: '제목', contents: '내용' },
        { number: 2, writer: '철수', title: '제목', contents: '내용' },
        { number: 3, writer: '철수', title: '제목', contents: '내용' },
      ];
    },
  },
  Mutation: {
    createBoard: (_, args) => {
      const { writer, title, contents } = args;
      return { number: 1, writer, title, contents };
    },
    createBoard2: (_, args) => {
      const { board } = args;
      return { number: 1, ...board };
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
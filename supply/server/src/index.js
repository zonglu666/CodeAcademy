import 'babel-polyfill';
import { ApolloServer } from 'apollo-server';
import globalResolvers from './graphql/GlobalResolvers';
import globalQuery from './graphql/TypeDefinitions';
import { connectDatabase } from './database';

(async () => {
  try {
    const info = await connectDatabase();
    console.log(`Connected to mongodb at ${info.host}:${info.port}/${info.name}`);
  } catch (error) {
    console.error('Unable to connect to database');
    process.exit(1);
  }
  const server = new ApolloServer({
    resolvers: globalResolvers,
    typeDefs: globalQuery,
  });
  const graphqlPort = 4000;
  server.setGraphQLPath('graphql');
  server.listen(graphqlPort).then(({ url }) => {
    console.log(` Apollo server ready on ${url}`);
  });
})();

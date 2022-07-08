import { ApolloServer } from 'apollo-server';
import typeDefs from './schema.js';
import { resolvers } from './resolvers.js';
import { TrackAPI } from './datasources/track-api.js';
import prettyerror from 'pretty-error';

// Makes nodejs console errrors readable.
const pe = new prettyerror();
pe.start();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    trackAPI: new TrackAPI(),
  }),
});

async function startApolloServer(server) {
  const { url } = await server.listen({ port: process.env.PORT || 4000 });
  console.log(`🚀  Server ready at ${url}`);
}
startApolloServer(server);

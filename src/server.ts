import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import { GQLContext } from "./gqlContext";

async function main(): Promise<void> {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: true,
    context: ({ req, res }: GQLContext) => ({ req, res }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  server.listen({ port: 8000 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

main();

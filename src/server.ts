import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { buildSchema } from "type-graphql";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import { GQLContext } from "./gqlContext";
import { RecipeResolver } from "./types/recipe-resolver";

async function main(): Promise<void> {
  const schema = await buildSchema({
    resolvers: [RecipeResolver],
    emitSchemaFile: true,
  });
  const server = new ApolloServer({
    // typeDefs,
    // resolvers,
    schema,
    cors: true,
    context: ({ req, res }: GQLContext) => ({ req, res }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  server.listen({ port: 8000 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

main();

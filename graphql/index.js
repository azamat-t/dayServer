import { makeExecutableSchema } from "graphql-tools";

import typeDefs from "./types/Task/";
import resolvers from "./resolvers/Task/";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;

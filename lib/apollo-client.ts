import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// Initialize Apollo Client
export const client = new ApolloClient({
  link: new HttpLink({ uri: process.env.NEXT_PUBLIC_GRAPHQL_URL || "" }),
  cache: new InMemoryCache(),
});

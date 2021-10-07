import { gql } from "apollo-server";

const typeDefs = gql`
  type Todo {
    id: ID!
    title: String!
    description: String
  }

  type Query {
    getTodos: [Todo!]
  }

  type Mutation {
    addTodo(title: String!, description: String): Todo
  }
`;

//    getUser(id: ID): User
/*

  type User {
    id: ID!
    username: String!
    email: String
  }

*/

export default typeDefs;

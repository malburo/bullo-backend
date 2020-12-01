import { gql } from "apollo-server-express";

const userTypes = gql`
  extend type Query {
    user(id: ID!): User
    users: [User!]
  }
  extend type Mutation {
    register(input: registerInput): User
  }
  type User {
    id: ID!
    username: String!
    email: String!
    profilePictureUrl: String
    boards: [Board]
  }
  input registerInput {
    fullname: String
    username: String
    email: String
    password: String
  }
`;

export default userTypes;

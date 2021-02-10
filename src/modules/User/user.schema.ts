import { gql } from "apollo-server-express";

const userTypes = gql`
  extend type Query {
    user(id: ID!): User
    users: [User!]
  }
  extend type Mutation {
    register(input: registerInput): AuthPayload
    login(input: loginInput): AuthPayload
  }
  type User {
    id: ID!
    username: String!
    email: String!
    profilePictureUrl: String
    boards: [Board]
  }
  type AuthPayload {
    access_token: String!
  }
  input registerInput {
    fullname: String
    username: String
    email: String
    password: String
  }
  input loginInput {
    username: String
    password: String
  }
`;

export default userTypes;

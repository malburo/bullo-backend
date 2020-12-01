import { gql } from "apollo-server-express";

const boardTypes = gql`
  extend type Query {
    board(id: ID!): Board
    boards: [Board]
  }
  extend type Mutation {
    createBoard(input: createBoardInput): Board
  }
  type Board {
    id: ID!
    isPrivate: Boolean!
    title: String!
    description: String
    coverUrl: String
    admin: User
    members: [User]
    lists: [List]
  }
  input createBoardInput {
    isPrivate: Boolean!
    title: String!
    description: String
    coverUrl: String
    adminId: String!
    membersId: [String]!
  }
`;

export default boardTypes;

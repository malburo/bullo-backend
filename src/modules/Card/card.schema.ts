import { gql } from "apollo-server-express";

const cardTypes = gql`
  extend type Mutation {
    createCard(input: createCardInput): Card
  }
  type Card {
    id: ID!
    title: String!
    coverUrl: String
    description: String
    comments: [Comment]
    labels: [Label]
    members: [User]
  }
  input createCardInput {
    title: String!
    coverUrl: String
    description: String
    listId: String!
    membersId: [String]!
  }
`;

export default cardTypes;

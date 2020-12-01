import { gql } from "apollo-server-express";

const listTypes = gql`
  extend type Mutation {
    createList(input: createListInput): List
  }
  type List {
    id: ID!
    title: String!
    cards: [Card]
  }
  input createListInput {
    title: String!
    boardId: String!
  }
`;

export default listTypes;

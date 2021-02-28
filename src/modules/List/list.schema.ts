import { gql } from "apollo-server-express";

const listTypes = gql`
  extend type Mutation {
    createList(input: createListInput): List
    dndList(input: dndListInput): List
  }
  type List {
    id: ID!
    title: String!
    tasks: [Task]
  }
  input createListInput {
    title: String!
    boardId: String!
  }
  input dndListInput {
    boardId: String!
    listId: String!
    source: Int!
    destination: Int!
  }
`;

export default listTypes;

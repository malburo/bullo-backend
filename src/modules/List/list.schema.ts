import { gql } from "apollo-server-express";

const listTypes = gql`
  extend type Mutation {
    createList(input: createListInput): List
    updatePosList(input: updatePosListInput): Status
  }
  type List {
    id: ID!
    title: String!
    tasks: [Task]
  }
  type Status {
    message: String!
  }
  input createListInput {
    title: String!
    boardId: String!
    pos: Int!
  }
  input updatePosListInput {
    boardId: String!
    listId: String!
    source: Int!
    destination: Int!
  }
`;

export default listTypes;

import { gql } from "apollo-server-express";

const taskTypes = gql`
  extend type Mutation {
    createTask(input: createTaskInput): Task
  }
  type Task {
    id: ID!
    title: String!
    coverUrl: String
    description: String
    comments: [Comment]
    labels: [Label]
    members: [User]
  }
  input createTaskInput {
    title: String!
    listId: String!
  }
`;

export default taskTypes;

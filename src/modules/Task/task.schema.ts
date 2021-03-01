import { gql } from "apollo-server-express";

const taskTypes = gql`
  extend type Mutation {
    createTask(input: createTaskInput): Task
    updatePosTask(input: updatePosTaskInput): Status
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
    pos: Int!
  }
  input updatePosTaskInput {
    taskId: String!
    source: Drop!
    destination: Drop!
  }
  input Drop {
    droppableId: String!
    index: Int!
  }
`;

export default taskTypes;

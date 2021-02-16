import { gql } from "apollo-server-express";
import boardTypes from "./modules/Board/board.schema";
import taskTypes from "./modules/Task/task.schema";
import commentTypes from "./modules/Comment/comment.schema";
import labelTypes from "./modules/Label/label.schema";
import listTypes from "./modules/List/list.schema";
import userTypes from "./modules/User/user.schema";

const queryTypes = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export default [
  userTypes,
  boardTypes,
  listTypes,
  taskTypes,
  commentTypes,
  labelTypes,
  queryTypes,
];

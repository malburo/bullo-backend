import { gql } from "apollo-server-express";

const commentTypes = gql`
  extend type Mutation {
    createComment(input: createCommentInput): Comment
  }
  type Comment {
    id: ID!
    cardId: String
    userId: String
    content: String
  }
  input createCommentInput {
    cardId: String!
    userId: String!
    content: String!
  }
`;

export default commentTypes;

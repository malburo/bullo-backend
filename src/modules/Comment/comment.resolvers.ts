import { IResolvers } from "apollo-server-express";
import Comment from "./comment.model";

const commentResolvers: IResolvers = {
  Query: {},
  Mutation: {
    createComment: async (root, { input }) => {
      return await Comment.create(input);
    },
  },
};
export default commentResolvers;

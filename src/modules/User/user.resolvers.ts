import { IResolvers } from "apollo-server-express";
import Board from "../Board/board.model";
import User from "./user.model";

const userResolvers: IResolvers = {
  Query: {
    user: async (root, args) => {
      return await User.findById(args.id);
    },
    users: () => User.find({}),
  },
  Mutation: {
    register: async (root, { input }) => {
      return await User.create(input);
    },
  },
  User: {
    boards: (user) => Board.find({ adminId: user.id }),
  },
};
export default userResolvers;

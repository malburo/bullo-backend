import { IResolvers } from "apollo-server-express";
import List from "../List/list.model";
import Board from "./board.model";
import User from "../User/user.model";
const boardResolvers: IResolvers = {
  Query: {
    board: async (root, args) => {
      return await Board.findById(args.id);
    },
    boards: () => Board.find({}),
  },
  Mutation: {
    createBoard: async (root, { input }) => {
      return await Board.create(input);
    },
  },
  Board: {
    lists: async (board) => await List.find({ boardId: board._id }),
    members: async (board) => await User.find({ _id: board.membersId }),
  },
};
export default boardResolvers;

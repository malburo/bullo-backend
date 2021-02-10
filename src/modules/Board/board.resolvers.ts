import { IResolvers } from "apollo-server-express";
import List from "../List/list.model";
import Board from "./board.model";
import User from "../User/user.model";
const boardResolvers: IResolvers = {
  Query: {
    board: async (root, args) => {
      return await Board.findById(args.id);
    },
    boards: async (root, args, context) => {
      return await Board.find({});
    },
  },
  Mutation: {
    createBoard: async (root, { input }, { user }) => {
      input.adminId = user._id;
      const board = await Board.create(input);
      await Board.updateOne(
        { _id: board._id },
        { $push: { membersId: user._id } }
      );
      return board;
    },
  },
  Board: {
    lists: async (board) => await List.find({ boardId: board._id }),
    members: async (board) => await User.find({ _id: board.membersId }),
    admin: async (board) => await User.findOne({ _id: board.adminId }),
  },
};
export default boardResolvers;

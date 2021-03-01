import { IResolvers } from "apollo-server-express";
import Task from "../Task/task.model";
import List from "./list.model";

const listResolvers: IResolvers = {
  Mutation: {
    createList: async (root, { input }) => {
      return await List.create(input);
    },
    updatePosList: async (root, { input }) => {
      await List.findOneAndUpdate(
        { boardId: input.boardId, pos: input.destination },
        { $set: { pos: input.source } }
      );
      await List.findByIdAndUpdate(input.listId, {
        $set: { pos: input.destination },
      });
      return { message: "Success" };
    },
  },
  List: {
    tasks: (list) => Task.find({ listId: list._id }).sort({ pos: 1 }),
  },
};
export default listResolvers;

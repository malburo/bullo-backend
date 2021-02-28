import { IResolvers } from "apollo-server-express";
import Task from "../Task/task.model";
import List from "./list.model";

const listResolvers: IResolvers = {
  Mutation: {
    createList: async (root, { input }) => {
      return await List.create(input);
    },
    dndList: async (root, { input }) => {
      return await List.create(input);
    },
  },
  List: {
    tasks: (list) => Task.find({ listId: list._id }),
  },
};
export default listResolvers;

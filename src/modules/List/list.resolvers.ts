import { IResolvers } from "apollo-server-express";
import Card from "../Card/card.model";
import List from "./list.model";

const listResolvers: IResolvers = {
  Mutation: {
    createList: async (root, { input }) => {
      return await List.create(input);
    },
  },
  List: {
    cards: (list) => Card.find({ listId: list._id }),
  },
};
export default listResolvers;

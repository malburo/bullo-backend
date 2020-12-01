import { IResolvers } from "apollo-server-express";
import Label from "./label.model";

const labelResolvers: IResolvers = {
  Query: {},
  Mutation: {
    createLabel: async (root, { input }) => {
      return await Label.create(input);
    },
  },
};
export default labelResolvers;

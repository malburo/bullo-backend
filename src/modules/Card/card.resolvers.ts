import { IResolvers } from "apollo-server-express";
import Comment from "../Comment/comment.model";
import Card from "./card.model";
import Label from "../Label/label.model";
import User from "../User/user.model";

const cardResolvers: IResolvers = {
  Mutation: {
    createCard: async (root, { input }) => {
      return await Card.create(input);
    },
  },
  Card: {
    comments: (card) => Comment.find({ cardId: card.id }),
    labels: (card) => Label.find({ cardId: card.id }),
    members: (card) => User.find({ _id: card.membersId }),
  },
};
export default cardResolvers;

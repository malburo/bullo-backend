import { IResolvers } from "apollo-server-express";
import Comment from "../Comment/comment.model";
import Task from "./task.model";
import Label from "../Label/label.model";
import User from "../User/user.model";

const taskResolvers: IResolvers = {
  Mutation: {
    createTask: async (root, { input }) => {
      return await Task.create(input);
    },
  },
  Task: {
    comments: (task) => Comment.find({ taskId: task.id }),
    labels: (task) => Label.find({ taskId: task.id }),
    members: (task) => User.find({ _id: task.membersId }),
  },
};
export default taskResolvers;

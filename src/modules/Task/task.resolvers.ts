import { IResolvers } from "apollo-server-express";
import Comment from "../Comment/comment.model";
import Task from "./task.model";
import List from "../List/list.model";
import Label from "../Label/label.model";
import User from "../User/user.model";

const taskResolvers: IResolvers = {
  Mutation: {
    createTask: async (root, { input }) => {
      const task = await Task.create(input);
      return await List.updateOne(
        { _id: task._id },
        { $push: { tasksId: task._id } }
      );
    },
    updatePosTask: async (root, { input }) => {
      if (input.destination.droppableId === input.source.droppableId) {
        await List.findOneAndUpdate(
          { listId: input.source.droppableId, pos: input.destination.index },
          { $set: { pos: input.source.index } }
        );
        await Task.findByIdAndUpdate(input.taskId, {
          $set: { pos: input.destination.index },
        });
        return { message: "Success" };
      }
      await Task.updateMany(
        {
          listId: input.source.droppableId,
          pos: { $gte: input.source.index },
        },
        { $inc: { pos: -1 } }
      );
      await Task.updateMany(
        {
          listId: input.destination.droppableId,
          pos: { $gte: input.destination.index },
        },
        { $inc: { pos: 1 } }
      );
      await Task.findByIdAndUpdate(input.taskId, {
        $set: {
          pos: input.destination.index,
          listId: input.destination.droppableId,
        },
      });
      return { message: "Success" };
    },
  },
  Task: {
    comments: (task) => Comment.find({ taskId: task.id }),
    labels: (task) => Label.find({ taskId: task.id }),
    members: (task) => User.find({ _id: task.membersId }),
  },
};
export default taskResolvers;

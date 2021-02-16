import mongoose from "mongoose";

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: String,
  description: String,
  coverUrl: String,
  listId: { type: Schema.Types.ObjectId, ref: "lists" },
  membersId: [{ type: Schema.Types.ObjectId, ref: "users" }],
});
taskSchema.set("timestamps", true);

const User = mongoose.model("tasks", taskSchema);

export default User;

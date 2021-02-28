import mongoose from "mongoose";

const Schema = mongoose.Schema;

const listSchema = new Schema({
  title: String,
  pos: { type: Number, required: true },
  boardId: { type: Schema.Types.ObjectId, ref: "boards" },
});
listSchema.set("timestamps", true);

const User = mongoose.model("lists", listSchema);

export default User;

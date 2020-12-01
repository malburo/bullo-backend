import mongoose from "mongoose";

const Schema = mongoose.Schema;

const listSchema = new Schema(
  {
    title: String,
    boardId: { type: Schema.Types.ObjectId, ref: 'boards' },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("lists", listSchema);

export default User;

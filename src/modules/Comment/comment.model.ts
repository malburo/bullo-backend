import mongoose from "mongoose";

const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    content: String,
    cardId: { type: Schema.Types.ObjectId, ref: 'cards' },
    userId: { type: Schema.Types.ObjectId, ref: 'users' },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("comments", commentSchema);

export default User;

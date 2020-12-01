import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cardSchema = new Schema(
  {
    title: String,
    description: String,
    coverUrl: String,
    listId: { type: Schema.Types.ObjectId, ref: "lists" },
    membersId: [{ type: Schema.Types.ObjectId, ref: "users" }],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("cards", cardSchema);

export default User;

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const boardSchema = new Schema(
  {
    isPrivate: Boolean,
    title: String,
    description: String,
    coverUrl: String,
    adminId: { type: Schema.Types.ObjectId, ref: 'users' },
    membersId: [{ type: Schema.Types.ObjectId, ref: 'users' }]
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("boards", boardSchema);

export default User;

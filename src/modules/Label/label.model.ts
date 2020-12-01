import mongoose from "mongoose";

const Schema = mongoose.Schema;

const labelSchema = new Schema(
  {
    name: String,
    color: String,
    cardId: { type: Schema.Types.ObjectId, ref: 'cards' },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("labels", labelSchema);

export default User;

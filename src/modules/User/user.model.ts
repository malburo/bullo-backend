import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fullname: String,
    username: { unique: true, type: String },
    email: { unique: true, type: String },
    password: String,
    confirmed: { type: Boolean, default: false },
    profilePictureUrl: {
      type: String,
      default:
        "https://res.cloudinary.com/malburo/image/upload/v1593193329/default-avatar/631929649c_tbfndr.svg",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("users", userSchema);

export default User;

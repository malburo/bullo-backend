import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fullname: { type: String },
    username: { unique: true, type: String },
    email: { unique: true, type: String },
    password: { type: String },
    confirmed: { type: Boolean, default: false },
    profilePictureUrl: { type: String },
  },
  {
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: (doc, obj) => {
        delete obj.password;
        return obj;
      },
    },
    timestamps: true,
  }
);

userSchema.set("timestamps", true);

const User = mongoose.model("users", userSchema);

export default User;

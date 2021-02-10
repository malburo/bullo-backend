import { IResolvers } from "apollo-server-express";
import Board from "../Board/board.model";
import User from "./user.model";
import bcrypt from "bcrypt";
import { genAccessToken } from "../../helpers/genToken.helper";

const userResolvers: IResolvers = {
  Query: {
    user: async (root, args) => {
      return await User.findById(args.id);
    },
    users: () => User.find({}),
  },
  Mutation: {
    register: async (root, { input }) => {
      try {
        const { fullname, username, email, password } = input;
        const checkEmail = await User.find({ email }).countDocuments();
        if (checkEmail) {
          return new Error("Email này đã được sử dụng");
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = await User.create({
          fullname,
          username,
          email,
          password: hashedPassword,
          profilePictureUrl: `https://avatars.dicebear.com/4.5/api/initials/${fullname}.svg`,
        });
        const access_token = genAccessToken(newUser._id);
        return { access_token };
      } catch (error) {
        throw new Error(error.message);
      }
    },
    login: async (root, { input }) => {
      try {
        const { username, password } = input;
        const user = await User.findOne({ username });
        if (!user) {
          return new Error("Username does not exist");
        }
        const comparePassword = await bcrypt.compare(password, user.password);
        if (!comparePassword) {
          return new Error("Wrong password");
        }
        const access_token = genAccessToken(user._id);
        return { access_token };
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
  User: {
    boards: (user) => Board.find({ adminId: user.id }),
  },
};
export default userResolvers;

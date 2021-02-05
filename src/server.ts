import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";
import path from "path";
import { connectDB } from "./db";
import resolvers from "./combineResolver";
import typeDefs from "./combineSchema";
import jwt from "jsonwebtoken";
import checkToken from "./middlewares/token.middleware";
import User from "./modules/User/user.model";

require("dotenv").config();
connectDB();

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const context = async ({ req }: any) => {
  try {
    let token = req.headers.authorization;
    if (!token) {
      return { user: undefined };
    }
    token = token.split(" ")[1];
    const decode: any = await jwt.verify(token, process.env.SECRET);
    const user = await User.findById(decode.id);
    return { user };
  } catch (error) {
    return { user: undefined };
  }
};

const apolloServer = new ApolloServer({ typeDefs, resolvers, context });
apolloServer.applyMiddleware({ app, path: "/graphql" });

app.listen(8000, () => {
  console.log("Server Started at Port, 8000");
});

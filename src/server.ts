import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";
import path from "path";
import { connectDB } from "./db";
import resolvers from "./combineResolver";
import typeDefs from "./combineSchema";

require("dotenv").config();
connectDB();

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app, path: "/graphql" });

app.listen(8000, () => {
  console.log("Server Started at Port, 8000");
});

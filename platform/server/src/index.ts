if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

import express from "express";
import mongoose from "mongoose";
import config from "./config";
import { ApolloServer } from "apollo-server-express";
import { resolvers } from "./api/graphql";

mongoose.connect(config.MONGO_URL);

const playground: any = {
  settings: {
    "editor.theme": "light",
    "editor.cursorShape": "line"
  }
};

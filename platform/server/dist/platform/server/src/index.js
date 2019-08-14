"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
const { ApolloServer, gql } = require("apollo-server-express");
mongoose_1.default.connect(config_1.default.MONGO_URL);
const playground = {
    settings: {
        "editor.theme": "light",
        "editor.cursorShape": "line"
    }
};
const typeDefs = `
type Query {
  info: String!
}
`;
const resolvers = {
    Query: {
        info: () => `HELLO`
    }
};
const server = new ApolloServer({
    playground,
    typeDefs,
    resolvers
});
const app = express_1.default();
server.applyMiddleware({ app });
app.listen({ port: config_1.default.PORT }, () => console.log(`🚀 Server ready at http://localhost:${config_1.default.PORT}${server.graphqlPath}`));
//# sourceMappingURL=index.js.map
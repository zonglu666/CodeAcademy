"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
var resolvers_1 = require("./resolvers");
exports.resolvers = resolvers_1.default;
const apollo_server_express_1 = require("apollo-server-express");
const schema = fs_1.default.readFileSync(path_1.default.join(__dirname, "schema.graphql"), {
    encoding: "utf8"
});
exports.typeDefs = apollo_server_express_1.gql(schema);
//# sourceMappingURL=index.js.map
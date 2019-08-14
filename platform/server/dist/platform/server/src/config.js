"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const environment_1 = require("@public/util/environment");
function getConfig() {
    const ENVIRONMENT = process.env.ENVIRONMENT;
    if (!ENVIRONMENT)
        throw "Missing env.ENVIRONMENT";
    const MONGO_URL = process.env.MONGO_URL;
    if (!MONGO_URL)
        throw "Missing env.MONGO_URL";
    return {
        PORT: process.env.PORT ? parseInt(process.env.PORT) : 4000,
        ENVIRONMENT: environment_1.parseEnvironment(ENVIRONMENT),
        MONGO_URL
    };
}
exports.default = getConfig();
//# sourceMappingURL=config.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseEnvironment = (environment) => {
    switch (environment) {
        case "prod":
            return "prod";
        case "staging":
            return "staging";
        default:
            return "dev";
    }
};
//# sourceMappingURL=environment.js.map
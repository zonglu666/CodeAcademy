"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
mongoose_1.default.connect(config_1.default.MONGO_URL);
const playground = {
    settings: {
        "editor.theme": "light",
        "editor.cursorShape": "line"
    }
};
//# sourceMappingURL=index.js.map
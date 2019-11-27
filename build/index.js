"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./src/App"));
const port = process.env.PORT || 1337;
App_1.default.listen(port);
console.log(`Bot is running on port ${port}`);

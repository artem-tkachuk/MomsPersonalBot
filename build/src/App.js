"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes/routes"));
const _404_1 = __importDefault(require("./controllers/404"));
const App = express_1.default();
App.use(body_parser_1.default.urlencoded({ extended: false }));
App.use(body_parser_1.default.json());
App.use(routes_1.default);
App.use(_404_1.default);
exports.default = App;
//TODO rename tokens to capital letters
//TODO deploy to Azure

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes/routes"));
const _404_1 = __importDefault(require("./controllers/404"));
const Index = express_1.default();
Index.use(body_parser_1.default.urlencoded({ extended: false }));
Index.use(body_parser_1.default.json());
Index.use(routes_1.default);
Index.use(_404_1.default);
exports.default = Index;
//TODO rename tokens to capital letters
//TODO deploy to Azure

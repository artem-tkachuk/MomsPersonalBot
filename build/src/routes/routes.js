"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const handler_1 = __importDefault(require("./handler"));
const token = process.env.token;
const router = express_1.default();
router.post(`/${token}`, handler_1.default);
exports.default = router;

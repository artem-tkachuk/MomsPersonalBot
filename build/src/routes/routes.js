"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const handler_1 = __importDefault(require("./handler"));
const token = process.env.token;
const router = express_1.Router();
router.post(`/${token}`, handler_1.default);
router.get('/', (req, res) => {
    res.send('Hello from MomsPersonalBot!');
});
exports.default = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegram_1 = __importDefault(require("../telegram/telegram"));
const getStart = (chat_id) => {
    const result = 'Добро пожаловать в бот! Выберите одну из функций на клавиатуре!';
    telegram_1.default(chat_id, result);
};
exports.default = getStart;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegram_1 = __importDefault(require("../telegram/telegram"));
const otherReq = (chat_id) => {
    const result = 'Бот пока что больше ничего не умеет, но я уже активно работаю над созданием его нового, ещё более интересного и полезного функционала!\nP.S. Спасибо команде тестирования за помощь!';
    telegram_1.default(chat_id, result);
};
exports.default = otherReq;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("request"));
const telegram_1 = __importDefault(require("../telegram/telegram"));
const formatNumber_1 = __importDefault(require("../util/formatNumber"));
const getBtc = function (chat_id) {
    const url = "https://blockchain.info/ticker";
    request_1.default.get(url, (err, res, body) => {
        body = JSON.parse(body);
        const result = `1 биткоин = $${formatNumber_1.default(body.USD.last)}\n\n1 биткоин = ${formatNumber_1.default(body.RUB.last)}₽`;
        telegram_1.default(chat_id, result);
    });
};
exports.default = getBtc;

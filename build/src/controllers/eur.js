"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("request"));
const telegram_1 = __importDefault(require("../telegram/telegram"));
const formatNumber_1 = __importDefault(require("../util/formatNumber"));
const KEY = process.env.ACCESS_CURRENCY_KEY; //api access key
const getEur = (chat_id) => {
    const options = {
        url: "http://data.fixer.io/api/latest",
        qs: {
            access_key: KEY,
            symbols: "RUB"
        }
    };
    request_1.default.get(options, (err, res, body) => {
        body = JSON.parse(body);
        const result = `1 € = ${formatNumber_1.default(body.rates.RUB)}₽`;
        telegram_1.default(chat_id, result);
    });
};
exports.default = getEur;

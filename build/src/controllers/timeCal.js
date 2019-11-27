"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("request"));
const telegram_1 = __importDefault(require("../telegram/telegram"));
const KEY = process.env.TIMECAL_API_KEY; //API access key
const getTimeCal = (chat_id) => {
    const options = {
        url: "http://api.timezonedb.com/v2.1/get-time-zone",
        qs: {
            key: KEY,
            by: "zone",
            zone: "America/Los_Angeles",
            fields: "formatted",
            format: "json"
        }
    };
    request_1.default.get(options, (err, res, body) => {
        body = JSON.parse(body);
        const result = `Сейчас в Калифорнии ${body.formatted}`;
        telegram_1.default(chat_id, result);
    });
};
exports.default = getTimeCal;

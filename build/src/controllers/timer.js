"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("request"));
const telegram_1 = __importDefault(require("../telegram/telegram"));
const KEY = process.env.TIMECAL_API_KEY; //API access key
const arrival_date = Date.parse("December  18, 2019 21:45:00"); //Next arrival date
console.log(KEY);
const MILLISECONDS_IN_DAY = 86400000;
const getTimer = (chat_id) => {
    const options = {
        url: "http://api.timezonedb.com/v2.1/get-time-zone",
        qs: {
            key: KEY,
            by: "zone",
            zone: "Europe/Moscow",
            fields: "formatted",
            format: "json"
        }
    };
    request_1.default.get(options, (err, res, body) => {
        body = JSON.parse(body);
        const today_date = Date.parse(body.formatted);
        let result = `Дни / Часы / Минуты / секунды по Московскому времени: `;
        let diff = (arrival_date - today_date) / MILLISECONDS_IN_DAY;
        result += `${Math.floor(diff)}:`;
        //TODO refactor
        const time = [24, 60, 60];
        time.forEach(function (x) {
            diff = (diff - Math.floor(diff)) * x;
            result += `${Math.floor(diff)}:`;
        });
        result = result.substr(0, result.length - 1);
        telegram_1.default(chat_id, result);
    });
};
exports.default = getTimer;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("request"));
const telegram_1 = __importDefault(require("../telegram/telegram"));
const tjtoken = process.env.tjtoken;
const tj = (chat_id) => {
    const options = {
        url: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=tjournal&&count=5',
        headers: {
            'User-Agent': 'MomsPersonalName',
            'authorization': tjtoken,
            'Accept-Encoding': 'utf-16'
        }
    };
    request_1.default.get(options, (err, res, body) => {
        let message = `5 последних новостей с TJ:\n\n${JSON.parse(body).join('\n\n')}`; //TODO test
        telegram_1.default(chat_id, message);
    });
};
exports.default = tj;

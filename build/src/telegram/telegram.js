"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("request"));
//import mongoose from 'mongoose';
const token = process.env.token; //bot's unique identifier
const author_chat_id = process.env.author_chat_id;
const send_message = (chat_id, result) => {
    const URL = 'https://api.telegram.org/bot' + token + '/sendmessage';
    const reply_keyboard = JSON.stringify({
        "keyboard": [
            [
                "Bitcoin в $ и ₽",
                "Время в Калифорнии"
            ],
            [
                "€ к ₽",
                "$ к ₽"
            ],
            [
                "Погода Сакраменто",
                "Погода Реутов"
            ],
            [
                "Время до приезда",
                "TJ"
            ]
        ]
    }); //adds reply keyboard with buttons with current functions
    const options = {
        url: URL,
        form: {
            chat_id: chat_id,
            text: result,
            reply_markup: reply_keyboard
        }
    };
    request_1.default.post(options, (err, res, body) => {
        body = JSON.parse(body);
        if (!body.ok) {
            send_message(author_chat_id, "SECURITY\n\nЧто-то не так с MomsPersonalBot!\nПользователь с char_id = " + chat_id.toString()); //let me know
        }
        else {
            ; //TODO db.make_record(body, "Responses");
        }
    });
};
exports.default = send_message;

var request = require('request');
var db = require('./db.js');

var token = require('../../../keys/token.js').token; //bot's unique identifier
var author_chat_id = require('../../../keys/author_chat_id.js').author_chat_id; //author's chat_id


send_message = function(chat_id, result) {

    var URL = 'https://api.telegram.org/bot' + token + '/sendmessage';

    var reply_keyboard = JSON.stringify({
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
                "Дни до приезда"
            ]
        ]
    });     //adds reply keyboard with buttons representing current functions

    var options = {

        url: URL,

        form: {

            chat_id: chat_id,

            text: result,

            reply_markup: reply_keyboard
        }

    };

    request.post(options, function(err, res, body) {

        if (err) {

            db.make_record(body, "Responses");

            send_message(author_chat_id, "Что-то не так с MomsPersonalBot!");

            send_message(chat_id, "Возникли какие-то проблемы! Создатель бота уже получил сообщение!");



        }

    });

};

module.exports.send_message = send_message;

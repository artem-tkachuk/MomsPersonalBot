var request = require('request');


var token = require('../../keys/token.js').token; //bot's unique identifier


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

            console.log(err);// ==> mongoDB

        }

    });

};

module.exports.send_message = send_message;

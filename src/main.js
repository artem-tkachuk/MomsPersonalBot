#!/usr/bin/env nodejs

const http = require('http');
const request = require('request');

const MILLISECONDS_IN_DAY = 86400000;

var curr_update = 0;

var result = '';

//adds fancy keyboard
reply_mark = '{"keyboard":[["Bitcoin в $ и ₽","Время в Сакраменто"],["€ к ₽","$ к ₽"],["Погода Сакраменто","Погода Реутов"], ["Дни до приезда"]]}';

const token = '743783565:AAEOkLQpG4_3j9cvkcw8vassWt5LBd7ehKU';

const server = http.createServer(function(req, res) {

    if (req.method == 'POST') {

        var body = '';

        req.on('data', function(data) {

            body += data

            if (body.length > 1e6) {

                req.connection.destroy();

            }
        });

        req.on('end', function() {

            body = JSON.parse(body);
            console.log(body);

            update_id = body.update_id;

            if (update_id != curr_update) {

                curr_update = update_id;



                var chat = body.message.chat.id;

                var original_text = body.message.text;

                if (("Дни до приезда" == original_text) || ("/arrival" == original_text)) {

                    const arrival_date = new Date(2018, 11, 26);

                    var today_date = new Date();

                    result = Math.floor((arrival_date - today_date) / MILLISECONDS_IN_DAY);

                } else {

		            result = "Бот пока что больше ничего не умеет, но я уже активно работаю над созданием его функционала!\nP.S. Спасибо команде тестирования за помощь!";

		        }

                var URL = 'https://api.telegram.org/bot' + token + '/' + "sendmessage";

                let options = {

                    url: URL,

                    form: {

                        chat_id: chat,

                        text: result,

                        reply_markup: reply_mark

                    }

                };

                request.post(options, function(err, res, body) {

                    let json_response = JSON.parse(body);

                    console.log(json_response);

                });
            }

        });

    }

    res.end("Bot welcomes you!");

});

server.listen(8443, 'localhost');

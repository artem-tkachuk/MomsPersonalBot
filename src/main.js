#!/usr/bin/env nodejs

//Packages
var http = require('http');
var request = require('request');


//Modules
var start = require('./start.js');
var btc = require('./btc.js');
var timecal = require('./timecal.js');
var eur = require('./eur.js');
var usd = require('./usd.js');
var weather = require('./weather.js');
var timer = require('./timer.js');
var otherreq = require('./otherreq.js');



var curr_update = 0;

var server = http.createServer(function(req, res) {

    if (req.method == 'POST') {

        var body = '';

        req.on('data', function(data) {

            body += data;

            if (body.length > 1e6) {

                req.connection.destroy();

            }
        });

        req.on('end', function() {

            body = JSON.parse(body);

            //console.log(body) ==>  mongoDB

            update_id = body.update_id;

            if (update_id != curr_update) {

                curr_update = update_id;

                var chat_id = body.message.chat.id;

                var original_text = body.message.text;

                if ("/start" == original_text) {

                    start.get_start(chat_id);

                } else if (("Bitcoin в $ и ₽" == original_text) || ("/btc" == original_text)) {

                    btc.get_btc(chat_id);

                } else if (("Время в Калифорнии" == original_text) || ("/timecal" == original_text)) {

                    timecal.get_timecal(chat_id);

                } else if (("Дни до приезда" == original_text) || ("/arrival" == original_text)) {

                    timer.get_timer(chat_id);

                } else if (("€ к ₽" == original_text) || ("/eur" == original_text)) {

                    eur.get_eur(chat_id);

                } else if (("$ к ₽" == original_text) || ("/usd" == original_text)) {

                    usd.get_usd(chat_id);

                } else if (("Погода Сакраменто" == original_text) || ("/weathersac" == original_text)) {

                    weather.get_weather(chat_id, "Sacramento");

                } else if (("Погода Реутов" == original_text) || ("/weatherreu" == original_text)) {

                    weather.get_weather(chat_id, "Reutov");

                } else {

                    otherreq.get_otherreq(chat_id);

                }
            }
        });

    }

    res.end("Bot welcomes you!");

});

server.listen(8443, 'localhost');

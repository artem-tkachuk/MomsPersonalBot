#!/usr/bin/env nodejs

//Packages
var http = require('http');
var request = require('request');


//Modules
var start = require('./modules/start.js');
var btc = require('./modules/btc.js');
var timecal = require('./modules/timecal.js');
var eur = require('./modules/eur.js');
var usd = require('./modules/usd.js');
var weather = require('./modules/weather.js');
var timer = require('./modules/timer.js');
var tj = require('./modules/tj.js');
var otherreq = require('./modules/otherreq.js');
var db = require('./modules/db.js');
var token = require('../../keys/token.js');



var curr_update = 0;    //Initial value for server startup

var server = http.createServer(function(req, res) {

    if (req.method == 'POST' && req.url == ('/' + token.token)) {

        var body = '';

        req.on('data', function(data) {

            body += data;

            if (body.length > 1e6) {

                req.connection.destroy();

            }
        });

        req.on('end', function() {

            body = JSON.parse(body);

            var update_id = body.update_id;



            if (update_id != curr_update) {

                curr_update = update_id;

                var chat_id = body.message.chat.id;

                var original_text = body.message.text;

                db.make_record(body, "Requests");                   //log all incoming requests

                if ("/start" == original_text) {

                    start.get_start(chat_id);

                } else if (("Bitcoin в $ и ₽" == original_text) || ("/btc" == original_text)) {

                    btc.get_btc(chat_id);

                } else if (("Время в Калифорнии" == original_text) || ("/timecal" == original_text)) {

                    timecal.get_timecal(chat_id);

                } else if (("Время до приезда" == original_text) || ("/arrival" == original_text)) {

                    timer.get_timer(chat_id);

                } else if (("€ к ₽" == original_text) || ("/eur" == original_text)) {

                    eur.get_eur(chat_id);

                } else if (("$ к ₽" == original_text) || ("/usd" == original_text)) {

                    usd.get_usd(chat_id);

                } else if (("Погода Сакраменто" == original_text) || ("/weathersac" == original_text)) {

                    weather.get_weather(chat_id, "Sacramento");

                } else if (("Погода Реутов" == original_text) || ("/weatherreu" == original_text)) {

                    weather.get_weather(chat_id, "Reutov");

                } else if (("TJ" == original_text) || ("/tj" == original_text)) {

                    tj.tj(chat_id);

                } else {

                    otherreq.get_otherreq(chat_id);

                }

            }

        });

    }

    res.end("Bot welcomes you!");

});

server.listen(8443, 'localhost');

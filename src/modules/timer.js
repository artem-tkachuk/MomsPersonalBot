var request = require('request');
var telegram = require('./telegram.js');

var KEY = require('../../../keys/timecal_api_key.js').API_KEY;  //API access key
var arrival_date = require('../../../keys/arrival_date.js').arrival_date;  //Next arrival date

var MILLISECONDS_IN_DAY = 86400000;




var get_timer = function(chat_id) {

    var options = {

        url: "http://api.timezonedb.com/v2.1/get-time-zone",

        qs: {

            key: KEY,

            by: "zone",

            zone: "Europe/Moscow",

            fields: "formatted",

            format: "json"

        }

    };

    request.get(options, function(error, response, body) {

        body = JSON.parse(body);

        var today_date = Date.parse(body.formatted);

        var result = "Дни / Часы / Минуты / секунды по Московскому времени: ";

        var diff = (arrival_date - today_date) / MILLISECONDS_IN_DAY;

        result += (Math.floor(diff) + ":");


        var time = [24, 60, 60];

        time.forEach(function(x) {

            diff = (diff - Math.floor(diff)) * x;

            result += (Math.floor(diff) + ":");

        });

        result = result.substr(0, result.length - 1);


        telegram.send_message(chat_id, result);

    });

};

module.exports.get_timer = get_timer;

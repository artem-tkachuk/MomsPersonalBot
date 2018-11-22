var request = require('request');

var telegram = require('./telegram.js');

var KEY = require('../../keys/timecal_api_key.js').API_KEY;  //API access key


var get_timecal = function(chat_id) {

    var options = {

        url: "http://api.timezonedb.com/v2.1/get-time-zone",

        qs: {

            key: KEY,

            zone: "PDT",

            by: "zone",

            fields: "formatted",

            format: "json"

        }

    };

    request.get(options, function(error, response, body) {

        body = JSON.parse(body);

        var result = "Сейчас в Калифорнии " + body.formatted;

        telegram.send_message(chat_id, result);

    });
};

function format_number(number) {

    return number.toLocaleString('ru');

}

module.exports.get_timecal = get_timecal;

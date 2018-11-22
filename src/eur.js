var request = require('request');

var telegram = require('./telegram.js');


var KEY = require('../../keys/ACCESS_KEY_CURRENCY.js').ACCESS_KEY;  //API access key



var get_eur = function(chat_id) {

    var options = {

        url: "http://data.fixer.io/api/latest",

        qs: {

            access_key: KEY,

            symbols: "RUB"

        }

    };

    request.get(options, function(error, response, body) {

        body = JSON.parse(body);

        var result = "1 € = " + format_number(body.rates.RUB) + "₽";

        telegram.send_message(chat_id, result);

    });
};

function format_number(number) {

    return number.toLocaleString('ru');

}

module.exports.get_eur = get_eur;

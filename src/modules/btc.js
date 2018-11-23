var request = require('request');

var telegram = require('./telegram.js');


var get_btc = function(chat_id) {

    var options = {

        url: "https://blockchain.info/ticker",

    };

    request.get(options, function(error, response, body) {

        body = JSON.parse(body);

        var result = "1 биткоин = $" + format_number(body.USD.last) + "\n\n" + "1 биткоин = " + format_number(body.RUB.last) + " ₽";

        telegram.send_message(chat_id, result);

    });
};


function format_number(number) {

    return number.toLocaleString('ru');

}

module.exports.get_btc = get_btc;

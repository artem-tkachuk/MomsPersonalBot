var telegram = require('./telegram.js');


var MILLISECONDS_IN_DAY = 86400000;

var arrival_date = new Date(2018, 11, 26);



var get_timer = function(chat_id) {

    var today_date = new Date();

    var result = Math.floor((arrival_date - today_date) / MILLISECONDS_IN_DAY);

    telegram.send_message(chat_id, result);

};

module.exports.get_timer = get_timer;

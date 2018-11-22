var telegram = require('./telegram.js');

var get_start = function(chat_id) {

    var result = "Добро пожаловать в бот! Выберите одну из функций на клавиатуре!";

    telegram.send_message(chat_id, result);
};

module.exports.get_start = get_start;

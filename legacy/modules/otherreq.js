var telegram = require('./telegram.js');

var get_otherreq = function(chat_id) {

    var result = "Бот пока что больше ничего не умеет, но я уже активно работаю над созданием его нового, ещё более интересного и полезного функционала!\nP.S. Спасибо команде тестирования за помощь!";

    telegram.send_message(chat_id, result);
};

module.exports.get_otherreq = get_otherreq;

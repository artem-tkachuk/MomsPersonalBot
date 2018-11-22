var request = require('request');

var telegram = require('./telegram.js');

var APPID= require('../../keys/weather.js').APPID;  //API access key


var get_weather = function(chat_id, city) {

    var options = {

        url: "http://api.openweathermap.org/data/2.5/weather",

        qs: {

            APPID: APPID,

            units: "metric",

            lang: "ru",

            q: city

        }

    };

    request.get(options, function(error, response, body) {

        body = JSON.parse(body);

        weather_features = {

            " ": body.weather[body.weather.length - 1].description,

            "Текущая температура: ": body.main.temp + "°C",

            "Максимальная температура за сутки: ": body.main.temp_max + "°C,",

            "Минимальная температура за сутки: ": body.main.temp_min + "°C,",

            "Влажность: ": body.main.humidity + " %,",

            "Ветер: ": body.wind.speed + " м/с,",

            "Рассвет: ":  new Date(body.sys.sunrise * 1000).getHours() + ":" + new Date(body.sys.sunrise * 1000).getMinutes(),

            "Закат: ": new Date(body.sys.sunset * 1000).getHours() + ":" + new Date(body.sys.sunset * 1000).getMinutes()

        };

        var result = "Сейчас в городе " + city;

        for (var i in weather_features) {

            result += i + weather_features[i] + "\n";

        }

        telegram.send_message(chat_id, result);

    });
};


module.exports.get_weather = get_weather;

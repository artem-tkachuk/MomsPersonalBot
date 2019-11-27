"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("request"));
const telegram_1 = __importDefault(require("../telegram/telegram"));
const APPID = process.env.WEATHER_APPID; //API access key
console.log(APPID);
const getWeather = (chat_id, city) => {
    const options = {
        url: "http://api.openweathermap.org/data/2.5/weather",
        qs: {
            APPID: APPID,
            units: "metric",
            lang: "ru",
            q: city
        }
    };
    request_1.default.get(options, (err, res, body) => {
        body = JSON.parse(body);
        const result = `Сейчас в городе ${city}`;
        /*---------
        TODO refactor
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

        --------- */
        telegram_1.default(chat_id, result);
    });
};
exports.default = getWeather;

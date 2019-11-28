import request from "request";
import send_message from "../telegram/telegram";
const APPID= process.env.WEATHER_APPID; //API access key

const getWeather = (chat_id: string, city: string) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=${APPID}&units=metric&lang=ru&q=${city}`;

    request.get(url, (err, res, body) => {
        body = JSON.parse(body);

        const weather_features = {
            " ": body.weather[body.weather.length - 1].description,
            "Текущая температура: ": body.main.temp + "°C",
            "Максимальная температура за сутки: ": body.main.temp_max + "°C,",
            "Минимальная температура за сутки: ": body.main.temp_min + "°C,",
            "Влажность: ": body.main.humidity + " %,",
            "Ветер: ": body.wind.speed + " м/с,",
            "Рассвет: ":  `${new Date(body.sys.sunrise * 1000).getHours()}:${new Date(body.sys.sunrise * 1000).getMinutes()}`,
            'Закат: ': new Date(body.sys.sunset * 1000).getHours() + ":" + new Date(body.sys.sunset * 1000).getMinutes()
        };

        let result = `Сейчас в городе ${city}`;
        //TODO refactor ES6
        for (let feature in weather_features) {
            // @ts-ignore
            result += `${feature}${weather_features[feature]}\n`;
        }
        send_message(chat_id, result);
    });
};

export default getWeather;



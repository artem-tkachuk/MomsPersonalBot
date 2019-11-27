import request from "request";
import send_message from "../telegram/telegram";

var KEY = require('../../../keys/timecal_api_key.js').API_KEY;  //API access key
var arrival_date = require('../../../keys/arrival_date.js').arrival_date;  //Next arrival date

const MILLISECONDS_IN_DAY = 86400000;

const getTimer = (chat_id: string) => {
    const options = {
        url: "http://api.timezonedb.com/v2.1/get-time-zone",
        qs: {
            key: KEY,
            by: "zone",
            zone: "Europe/Moscow",
            fields: "formatted",
            format: "json"
        }
    };

    request.get(options, (err, res, body) => {
        body = JSON.parse(body);
        const today_date = Date.parse(body.formatted);
        let result = `Дни / Часы / Минуты / секунды по Московскому времени: `;
        let diff = (arrival_date - today_date) / MILLISECONDS_IN_DAY;
        result += `${Math.floor(diff)}:`;

        //TODO refactor
        const time = [24, 60, 60];
        time.forEach(function(x) {
            diff = (diff - Math.floor(diff)) * x;
            result += `${Math.floor(diff)}:`;
        });
        result = result.substr(0, result.length - 1);

        send_message(chat_id, result);
    });
};

export default getTimer;

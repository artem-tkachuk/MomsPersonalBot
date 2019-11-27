import request from "request";

import send_message from "../telegram/telegram";
import formatNumber from "../util/formatNumber";

const KEY = process.env.ACCESS_CURRENCY_KEY; //api access key

const getEur = (chat_id: string) => {
    const options = {
        url: "http://data.fixer.io/api/latest",
        qs: {
            access_key: KEY,
            symbols: "RUB"
        }
    };

    request.get(options, (err, res, body) => {
        body = JSON.parse(body);
        const result = `1 € = ${formatNumber(body.rates.RUB)}₽`;
        send_message(chat_id, result);
    });
};

export default getEur;

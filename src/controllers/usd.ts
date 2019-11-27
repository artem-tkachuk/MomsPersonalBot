import request from "request";

import formatNumber from "../util/formatNumber";
import send_message from "../telegram/telegram";

const KEY = process.env.ACCESS_CURRENCY_KEY;  //API access key


const getUsd = (chat_id: string) => {
    const options = {
        url: "http://data.fixer.io/api/latest",
        qs: {
            access_key: KEY,
            symbols: "RUB,USD"
        }
    };

    request.get(options, (err, res, body) => {
        body = JSON.parse(body);
        const result = `$1 = ${formatNumber((body.rates.RUB / body.rates.USD))}₽`;
        send_message(chat_id, result);
    });
};

export default getUsd;

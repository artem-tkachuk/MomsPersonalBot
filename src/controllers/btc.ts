import request from 'request';
import send_message from '../telegram/telegram';
import formatNumber from '../util/formatNumber';

const getBtc = function(chat_id: string) {
    const url = "https://blockchain.info/ticker";

    request.get(url, (err, res, body) => {
        body = JSON.parse(body);
        const result = `1 биткоин = $${formatNumber(body.USD.last)}\n\n1 биткоин = ${formatNumber(body.RUB.last)}₽`;
        send_message(chat_id, result);
    });
};

export default getBtc;

import request from "request";
import send_message from "../telegram/telegram";

const KEY = process.env.TIMECAL_API_KEY;  //API access key


const getTimeCal = (chat_id: string) => {
    const options = {
        url: "http://api.timezonedb.com/v2.1/get-time-zone",
        qs: {
            key: KEY,
            by: "zone",
            zone: "America/Los_Angeles",
            fields: "formatted",
            format: "json"
        }
    };

    request.get(options, (err, res, body) => {
        body = JSON.parse(body);
        const result = `Сейчас в Калифорнии ${body.formatted}`;
        send_message(chat_id, result);
    });
};

export default getTimeCal;

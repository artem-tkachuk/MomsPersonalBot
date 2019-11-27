import { Request, Response } from 'express';

import getStart from '../controllers/start';
import getBtc from '../controllers/btc';
import getTimeCal from "../controllers/timeCal";
import getTimer from "../controllers/timer";
import getEur from "../controllers/eur";
import getUsd from "../controllers/usd";
import getWeather from "../controllers/weather";
import tj from '../controllers/tj';
import otherReq from '../controllers/otherReq';

const handleRoutes = (req: Request, res: Response) => {
    //we do not need to send telegram any info right now, just let them know of success
    res.status(200).end();

    const body = req.body;
    let curr_update = process.env.curr_update;
    const update_id = body.update_id;

    if (update_id != curr_update) {
        curr_update = update_id;
        const chat_id = body.message.chat.id;
        const original_text: string = body.message.text;

        // db.make_record(body, "Requests");                   //TODO log all incoming requests

        switch(original_text) {
            case "/start":
                getStart(chat_id); break;
            case "Bitcoin в $ и ₽" || "/btc":
                getBtc(chat_id); break;
            case "Время в Калифорнии" || "/timecal":
                getTimeCal(chat_id); break;
            case "Время до приезда" || "/arrival":
                getTimer(chat_id); break;
            case "€ к ₽" || "/eur":
                getEur(chat_id); break;
            case "$ к ₽" || "/usd":
                getUsd(chat_id); break;
            case "Погода Сакраменто" || "/weathersac":
                getWeather(chat_id, "Sacramento"); break;
            case "Погода Реутов" || "/weatherreu":
                getWeather(chat_id, "Reutov"); break;
            case "TJ" || "/tj":
                tj(chat_id); break;
            default:
                otherReq(chat_id);
        }
    }
};

export default handleRoutes;
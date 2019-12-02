import { Request, Response } from 'express';

import Req from '../models/Request';

import getStart from '../controllers/start';
import getBtc from '../controllers/btc';
import getTimeCal from "../controllers/timeCal";
import getTimer from "../controllers/timer";
import getEur from "../controllers/eur";
import getUsd from "../controllers/usd";
import getWeather from "../controllers/weather";
import tj from '../controllers/tj';
import otherReq from '../controllers/otherReq';

const handleRoutes = async (req: Request, res: Response) => {
    //we do not need to send telegram any info right now, just let them know of success
    res.status(200).end();

    const body = req.body;
    let curr_update = process.env.curr_update;
    const update_id = body.update_id;

    if (update_id != curr_update) {
        curr_update = update_id;
        const chat_id = body.message.chat.id;
        const original_text: string = body.message.text;

        await Req.create({
            update_id: body.update_id,
            id: body.message.from.id,
            is_bot: body.message.from.is_bot,
            first_name: body.message.from.first_name,
            last_name: body.message.from.last_name,
            username: body.message.from.username,
            chat_id: body.message.chat.id,
            message_date: body.message.date,
            original_text: body.message.text
        }); //log to db

        switch(original_text) {
            case "/start":
                getStart(chat_id); break;
            case "Bitcoin в $ и ₽": case "/btc":
                getBtc(chat_id); break;
            case "Время в Калифорнии": case "/timecal":
                getTimeCal(chat_id); break;
            case "Время до приезда": case "/arrival":
                getTimer(chat_id); break;
            case "€ к ₽": case "/eur":
                getEur(chat_id); break;
            case "$ к ₽": case "/usd":
                getUsd(chat_id); break;
            case "Погода Сакраменто": case "/weathersac":
                getWeather(chat_id, "Sacramento"); break;
            case "Погода Реутов": case "/weatherreu":
                getWeather(chat_id, "Reutov"); break;
            case "TJ": case "/tj":
                tj(chat_id); break;
            default:
                otherReq(chat_id);
        }
    }
};

export default handleRoutes;
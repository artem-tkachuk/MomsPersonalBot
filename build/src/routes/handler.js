"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const start_1 = __importDefault(require("../controllers/start"));
const btc_1 = __importDefault(require("../controllers/btc"));
const timeCal_1 = __importDefault(require("../controllers/timeCal"));
const timer_1 = __importDefault(require("../controllers/timer"));
const eur_1 = __importDefault(require("../controllers/eur"));
const usd_1 = __importDefault(require("../controllers/usd"));
const weather_1 = __importDefault(require("../controllers/weather"));
const tj_1 = __importDefault(require("../controllers/tj"));
const otherReq_1 = __importDefault(require("../controllers/otherReq"));
const handleRoutes = (req, res) => {
    //we do not need to send telegram any info right now, just let them know of success
    res.status(200).end();
    const body = req.body;
    let curr_update = process.env.curr_update;
    const update_id = body.update_id;
    if (update_id != curr_update) {
        curr_update = update_id;
        const chat_id = body.message.chat.id;
        const original_text = body.message.text;
        // db.make_record(body, "Requests");                   //TODO log all incoming requests
        switch (original_text) {
            case "/start":
                start_1.default(chat_id);
                break;
            case "Bitcoin в $ и ₽" || "/btc":
                btc_1.default(chat_id);
                break;
            case "Время в Калифорнии" || "/timecal":
                timeCal_1.default(chat_id);
                break;
            case "Время до приезда" || "/arrival":
                timer_1.default(chat_id);
                break;
            case "€ к ₽" || "/eur":
                eur_1.default(chat_id);
                break;
            case "$ к ₽" || "/usd":
                usd_1.default(chat_id);
                break;
            case "Погода Сакраменто" || "/weathersac":
                weather_1.default(chat_id, "Sacramento");
                break;
            case "Погода Реутов" || "/weatherreu":
                weather_1.default(chat_id, "Reutov");
                break;
            case "TJ" || "/tj":
                tj_1.default(chat_id);
                break;
            default:
                otherReq_1.default(chat_id);
        }
    }
};
exports.default = handleRoutes;

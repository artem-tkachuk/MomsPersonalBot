import request from 'request';

import Response from "../models/Response";

const token = process.env.token;     //bot's unique identifier
const author_chat_id = process.env.author_chat_id;

const send_message = (chat_id: string, result: string) => {
    const URL = 'https://api.telegram.org/bot' + token + '/sendmessage';
    const reply_keyboard = JSON.stringify({
        "keyboard": [
            [
                "Bitcoin в $ и ₽",
                "Время в Калифорнии"
            ],
            [
                "€ к ₽",
                "$ к ₽"
            ],
            [
                "Погода Сакраменто",
                "Погода Реутов"
            ],
            [
                "Время до приезда",
                "TJ"
            ]
        ]
    });     //adds reply keyboard with buttons with current functions
    const options = {
        url: URL,
        form: {
            chat_id: chat_id,
            text: result,
            reply_markup: reply_keyboard
        }
    };

    request.post(options, async (err, res, body) => {
	    body = JSON.parse(body);
	    if (!body.ok) {
            send_message(author_chat_id!, "SECURITY\n\nЧто-то не так с MomsPersonalBot!\nПользователь с chat_id = " + chat_id.toString()); //let me know
        } else {
		    await Response.create({
                ok: body.ok,
                from_id: body.result.from.id,
                from_is_bot: body.result.from.is_bot,
                from_username: body.result.from.username,
                chat_id: body.result.chat.id,
                first_name: body.result.chat.first_name,
                last_name: body.result.chat.last_name,
                username: body.result.chat.username,
                message_date: body.result.date,
                original_text: body.result.text
		    });
	    }
    });
};

export default send_message;



import request from 'request';

//import mongoose from 'mongoose';

const token = process.env.token;     //bot's unique identifier
const author_chat_id = process.env.author_chat_id

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

    request.post(options, (err, res, body) => {
	    body = JSON.parse(body);
	    if (!body.ok) {
            send_message(author_chat_id!, "SECURITY\n\nЧто-то не так с MomsPersonalBot!\nПользователь с char_id = " + chat_id.toString()); //let me know
        } else {
		    ;//TODO db.make_record(body, "Responses");
	    }
    });
};

export default send_message;


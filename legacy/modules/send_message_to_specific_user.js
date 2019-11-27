const telegram = require('telegram');

const chat_id = process.argv[0];
const message = process.argv[1];

telegram.send_message(chat_id, message);
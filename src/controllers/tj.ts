import request from 'request';
import send_message from '../telegram/telegram';
const tjtoken = `Bearer ${process.env.tjtoken}`;

const tj = (chat_id: string) => {
    const options = {   //TODO something incorrect here?????
        url: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=tjournal&count=5',
        headers: {
            'User-Agent': 'MomsPersonalName',
            'authorization': tjtoken,
            'Accept-Encoding': 'utf-16'
        }
    };
    request.get(options, (err: any, res: any, body: string) => {
        let message = `5 последних новостей с TJ:\n\n`;
        JSON.parse(body).forEach((tweet: { text: any; }) => message += `${tweet.text}\n\n`);
        send_message(chat_id, message);
    });
};

export default tj;





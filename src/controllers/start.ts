import send_message from '../telegram/telegram';

const getStart = (chat_id: string) => {
    const result = 'Добро пожаловать в бот! Выберите одну из функций на клавиатуре!';
    send_message(chat_id, result);
};

export default getStart;

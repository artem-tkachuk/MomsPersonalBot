import send_message from '../telegram/telegram';

const otherReq = (chat_id: string) => {
    const result = 'Бот пока что больше ничего не умеет, но я уже активно работаю над созданием его нового, ещё более интересного и полезного функционала!\nP.S. Спасибо команде тестирования за помощь!';
    send_message(chat_id, result);
};

export default otherReq;

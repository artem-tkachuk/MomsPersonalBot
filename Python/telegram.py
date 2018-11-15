from requests import get


reply_markup = '{"keyboard":[["Bitcoin в $ и ₽","Время в Сакраменто"],["€ к ₽","$ к ₽"],["Погода Сакраменто","Погода Реутов"], ["Дни до приезда"]]}' #adds fancy keyboard


token = "657188946:AAHLFiecpDW264B9E8bd2_HAUJHFlqwixU8"



URL_telegram = "https://api.telegram.org/bot" + token + "/"



def get_updates():

	return get(URL_telegram + "getupdates").json()['result'][-1]



def send_message(chat_id, result):

	send_message_parameters = "chat_id=" + str(chat_id) + "&" + "text=" + result

	URL_reply_markup = "&reply_markup=" + reply_markup

	URL_send_message = URL_telegram + "sendmessage?" + send_message_parameters + URL_reply_markup

	get(URL_send_message)

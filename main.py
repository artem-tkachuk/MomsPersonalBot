#Standard library functions and methods imported
from requests import get
from time import strftime
from time import localtime


#imported modules & functions
from bitcoinRate import bitcoin_rate
from telegram import get_updates
from telegram import send_message
from timeSac import time_sac
from weather import weather_city
from currency import get_currency
from timer import count_remaining_time


#global ID's for weather_city function
ID_Sac = "5389519"
ID_Reu = "502018"


def main():

	curr_update_id = 0


	while True:

		response = get_updates()


		update_id = response['update_id']

		if curr_update_id != update_id:


			curr_update_id = update_id

			

			original_text = response['message']['text']

			chat_id = response['message']['chat']['id']





			if ("Bitcoin в $ и ₽" in original_text) or ("/btc" in original_text):

				result  = "1 биткоин = " + str(bitcoin_rate()['symbol']) + str(bitcoin_rate()['last']) + "\n1 биткоин = " + str(bitcoin_rate('RUB')['last']) + " ₽"


			elif ("Время в Сакраменто" in original_text) or ("/time" in original_text):

				result = "Сейчас в Сакраменто " + str(time_sac())


			elif ("Погода Сакраменто" in original_text) or ("/weathersac" in original_text):

				weather_response = weather_city(ID_Sac)

				weather_features = {
					"temp_max":  weather_response['main']['temp_max'],
					"temp_min":  weather_response['main']['temp_min'],
					"temp": weather_response['main']['temp'],
					"humidity": weather_response['main']['humidity'],
					"wind": weather_response['wind']['speed'],
					"sunrise": strftime("%H:%M", localtime(int(weather_response['sys']['sunrise']))),
					"sunset": strftime("%H:%M", localtime(int(weather_response['sys']['sunset']))),
					"description": weather_response['weather'][-1]['description']
				}

				result = "Сейчас в Сакраменто " + str(weather_features['temp']) + "℃, " + weather_features['description'] + "\n" + "Максимальная температура за сутки: " + str(weather_features['temp_max']) + "℃\n" + "Минимальная температура за сутки: " + str(weather_features['temp_min']) + "℃\n" + "Влажность: " + str(weather_features['humidity']) + "%\n" + "Ветер: " + str(weather_features['wind']) + "м/с\n" + "Рассвет: " + weather_features['sunrise'] + "\n" + "Закат: " + weather_features['sunset']


			elif ("Погода Реутов" in original_text) or ("/weatherreu" in original_text):

				weather_response = weather_city(ID_Reu)

				weather_features = {
					"temp_max":  weather_response['main']['temp_max'],
					"temp_min":  weather_response['main']['temp_min'],
					"temp": weather_response['main']['temp'],
					"humidity": weather_response['main']['humidity'],
					"wind": weather_response['wind']['speed'],
					"sunrise": strftime("%H:%M", localtime(int(weather_response['sys']['sunrise']))),
					"sunset": strftime("%H:%M", localtime(int(weather_response['sys']['sunset']))),
					"description": weather_response['weather'][-1]['description']
				}

				result = "Сейчас в Реутове " + str(weather_features['temp']) + "℃, " + weather_features['description'] + "\n" + "Максимальная температура за сутки: " + str(weather_features['temp_max']) + "℃\n" + "Минимальная температура за сутки: " + str(weather_features['temp_min']) + "℃\n" + "Влажность: " + str(weather_features['humidity']) + "%\n" + "Ветер: " + str(weather_features['wind']) + "м/с\n" + "Рассвет: " + weather_features['sunrise'] + "\n" + "Закат: " + weather_features['sunset']


			elif ("€ к ₽" in original_text) or ("/eur" in original_text):

				result = "1 € = " + str(get_currency()['rates']['RUB']) + "₽"


			elif ("$ к ₽" in original_text) or ("/usd" in original_text):

				currency_response = get_currency()

				result = "$1 = " + str(currency_response['rates']['RUB'] / currency_response['rates']['USD']) + "₽"


			elif ("Дни до приезда" in original_text) or ("/arrival" in original_text):

				today_date = strftime("%m/%d/%Y")

				arrival_date = "12/26/2018"

				result = "До приезда создателя бота осталось всего ничего дней: " + str(count_remaining_time(today_date, arrival_date))


#			elif ("Новости vc.ru" in original_text) or ("/vc" in original_text):
#
#				result = ...


			else:

				result = "Бот пока больше ничего не умеет!!! Но я это скоро исправлю! Попробуй выбрать другие команды!"




			print(original_text + ":\n" + result + "\n\n")

			
			send_message(chat_id, result)





if __name__ == '__main__':
	main()






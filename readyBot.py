# -*- coding: utf-8 -*-
import telebot
import requests
import json

token=''
bot = telebot.TeleBot(token)

@bot.message_handler(commands=['weatherSac'])
def handler_Weather_in_Sac(message):
	payload = {'APPID':'d8973bd4eedd89114bd59d13392b06cc','units':'metric','lang':'ru','q':'Sacramento'}
	response = requests.get("http://api.openweathermap.org/data/2.5/weather", params=payload) # get-запрос
	s='Состояние: '+response.json()['weather'][0]['description'] + '\nТемпература: ' + str(response.json()['main']['temp']) + 'C°' + '\nМинимальная температура: '+ str(response.json()['main']['temp_min']) + 'C°' + '\nМаксимальная температура: ' + str(response.json()['main']['temp_max']) + 'C°' + '\nДавление: ' + str(response.json()['main']['pressure'])
	bot.send_message(message.chat.id,s)

@bot.message_handler(commands=['weatherMsc'])
def handler_Weather_in_Msc(message):
	payload = {'APPID':'d8973bd4eedd89114bd59d13392b06cc','units':'metric','lang':'ru','q':'Moscow'}
	response = requests.get("http://api.openweathermap.org/data/2.5/weather", params=payload) # get-запрос
	s='Состояние: '+response.json()['weather'][0]['description'] + '\nТемпература: ' + str(response.json()['main']['temp']) + 'C°' + '\nМинимальная температура: '+ str(response.json()['main']['temp_min']) + 'C°' + '\nМаксимальная температура: ' + str(response.json()['main']['temp_max']) + 'C°' + '\nДавление: ' + str(response.json()['main']['pressure'])
	bot.send_message(message.chat.id,s)

@bot.message_handler(commands=['timeMsc'])
def handler_Time_in_Msc(message):
	payload = {'key':'KKNMU58PCCMN','format':'json','by':'zone','zone':'Europe/Moscow'}
	response = requests.get("http://api.timezonedb.com/v2.1/get-time-zone", params=payload) # get-запрос
	bot.send_message(message.chat.id,response.json()['formatted'])
	
@bot.message_handler(commands=['timeSac'])
def handler_Time_in_Sac(message):
	payload = {'key':'KKNMU58PCCMN','format':'json','by':'zone','zone':'America/Los_Angeles'}
	response = requests.get("http://api.timezonedb.com/v2.1/get-time-zone", params=payload) # get-запрос
	bot.send_message(message.chat.id, response.json()['formatted'])
	
@bot.message_handler(commands=['help'])
def handler_Help(message):
	bot.send_message(message.chat.id, 'Список команд:\n\n /help - помощь \n /weatherSac - погода в Сакраменто \n /weatherMsc - погода в Москве \n /timeSac - время в Сакраменто \n /timeMsc - время в Москве')

@bot.message_handler(content_types=["text"])
def repeat_all_messeges(message):
	bot.send_message(message.chat.id, 'hi')



if __name__ == '__main__':
	bot.polling(none_stop=True)
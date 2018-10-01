# -*- coding: utf-8 -*-
import telebot
import requests
import json

token='696630950:AAFEWtdGCGKERwTElBMrh446dC2AvZCEf1g'
bot = telebot.TeleBot(token)

@bot.message_handler(commands=['weatherSac'])
def handler_Weather_in_Msc(message):
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
	
@bot.message_handler(content_types=["text"])
def repeat_all_messeges(message):
	bot.send_message(message.chat.id, 'hi')



if __name__ == '__main__':
	bot.polling(none_stop=True)
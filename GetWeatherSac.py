import requests

response = requests.get('http://api.openweathermap.org/data/2.5/weather?APPID=d8973bd4eedd89114bd59d13392b06cc&units=metric&lang=ru&q=Sacramento') # get-запрос
print(response.text)